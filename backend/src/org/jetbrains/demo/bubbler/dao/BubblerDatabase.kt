package org.jetbrains.demo.bubbler.dao

import org.jetbrains.demo.bubbler.model.*
import org.jetbrains.squash.connection.*
import org.jetbrains.squash.dialects.h2.*
import org.jetbrains.squash.expressions.*
import org.jetbrains.squash.query.*
import org.jetbrains.squash.results.*
import org.jetbrains.squash.schema.*
import org.jetbrains.squash.statements.*
import java.io.*
import java.time.*

class BubblerDatabase(val db: DatabaseConnection = H2Connection.createMemoryConnection()) : BubblerStorage {
    constructor(dir: File) : this(H2Connection.create("jdbc:h2:file:${dir.canonicalFile.absolutePath}"))

    init {
        db.transaction {
            databaseSchema().create(Users, Thoughts, Bubbles, UserBubbles)
        }
    }

    override fun countReplies(id: Int): Int = db.transaction {
        from(Thoughts).select(Thoughts.id.count()).select {
            Thoughts.replyTo eq id
        }.execute().single().get<Int>(0)
    }

    override fun createThought(user: String, bubbleId: Int?, text: String, replyTo: Int?, date: LocalDateTime): Int = db.transaction {
        insertInto(Thoughts).values {
            it[Thoughts.user] = user
            it[Thoughts.bubbleId] = bubbleId
            it[Thoughts.date] = date
            it[Thoughts.replyTo] = replyTo
            it[Thoughts.text] = text
        }.fetch(Thoughts.id).execute()
    }

    override fun deleteThought(id: Int) = db.transaction {
        deleteFrom(Thoughts).where { Thoughts.id eq id }.execute()
    }

    override fun joinBubble(userId: String, bubbleId: Int): Int = db.transaction {
        insertInto(UserBubbles).values {
            it[UserBubbles.userId] = userId
            it[UserBubbles.bubbleId] = bubbleId
        }.fetch(UserBubbles.id).execute()
    }

    override fun leaveBubble(userId: String, bubbleId: Int) = db.transaction {
        deleteFrom(UserBubbles).where { UserBubbles.userId eq userId  }.where{UserBubbles.bubbleId eq bubbleId}.execute()
    }

    override fun getThought(id: Int) = db.transaction {
        val row = from(Thoughts).where { Thoughts.id eq id }.execute().single()
        Thought(id, row[Thoughts.user], row[Thoughts.bubbleId], row[Thoughts.text], row[Thoughts.date].toString(), row[Thoughts.replyTo])
    }

    override fun userThoughts(userId: String) = db.transaction {
        from(Thoughts)
                .select(Thoughts.id)
                .where { Thoughts.user eq userId }
                .orderBy(Thoughts.date, false)
                .limit(100)
                .execute()
                .map { it[Thoughts.id] }
                .toList()
    }

    override fun user(userId: String, hash: String?) = db.transaction {
        from(Users).where { Users.id eq userId }.execute()
                .mapNotNull {
                    if (hash == null || it[Users.passwordHash] == hash) {
                        User(userId, it[Users.email], it[Users.phoneNumber], it[Users.displayName], it[Users.passwordHash])
                    } else {
                        null
                    }
                }
                .singleOrNull()
    }

    override fun createBubble(name: String, date: LocalDateTime): Int = db.transaction {
        insertInto(Bubbles).values {
            it[Bubbles.name] = name
            it[Bubbles.creationTime] = date
        }.fetch(Bubbles.id).execute()
    }

    override fun bubble(bubbleId: Int) = db.transaction {
        from(Bubbles).where { Bubbles.id eq bubbleId }.execute()
                .mapNotNull {
                    Bubble(bubbleId, it[Bubbles.name], it[Bubbles.creationTime])
                }
                .single()
    }

    override fun bubbleByName(bubbleName: String) = db.transaction {
        from(Bubbles).where { Bubbles.name eq bubbleName }.execute()
                .map { Bubble(it[Bubbles.id], bubbleName, it[Bubbles.creationTime]) }.singleOrNull()
    }


    override fun userByEmail(email: String) = db.transaction {
        from(Users).where { Users.email eq email }.execute()
                .map { User(it[Users.id], email, it[Users.phoneNumber], it[Users.displayName], it[Users.passwordHash]) }.singleOrNull()
    }

    override fun userByPhoneNumber(phoneNumber: String) = db.transaction {
        from(Users).where { Users.phoneNumber eq phoneNumber }.execute()
                .map { User(it[Users.id], it[Users.email], phoneNumber, it[Users.displayName], it[Users.passwordHash]) }.singleOrNull()
    }

    override fun createUser(user: User) = db.transaction {
        insertInto(Users).values {
            it[id] = user.userId
            it[displayName] = user.displayName
            it[email] = user.email
            it[phoneNumber] = user.phoneNumber
            it[passwordHash] = user.passwordHash
        }.execute()
    }

    override fun top(count: Long): List<Int> = db.transaction {
        // note: in a real application you shouldn't do it like this
        //   as it may cause database outages on big data
        //   so this implementation is just for demo purposes

        val k2 = Thoughts.alias("k2")
        from(Thoughts).leftJoin(k2) { Thoughts.id eq Thoughts.replyTo(k2) }
                .select(Thoughts.id, Thoughts.id(k2).count())
                .groupBy(Thoughts.id)
                .orderBy(Thoughts.id(k2).count(), ascending = false)
                .limit(count)
                .execute()
                .map { it[Thoughts.id(k2)] }
                .toList()
    }

    override fun topForBubble(count: Long, bubbleId: Int): List<Int> = db.transaction {
        // note: in a real application you shouldn't do it like this
        //   as it may cause database outages on big data
        //   so this implementation is just for demo purposes

        val k2 = Thoughts.alias("k2")
        from(Thoughts).leftJoin(k2) { Thoughts.id eq Thoughts.replyTo(k2) }
                .select(Thoughts.id, Thoughts.id(k2).count())
                .where(Thoughts.bubbleId eq bubbleId)
                .groupBy(Thoughts.id)
                .orderBy(Thoughts.id(k2).count(), ascending = false)
                .limit(count)
                .execute()
                .map { it[Thoughts.id(k2)] }
                .toList()
    }

    override fun latest(count: Long): List<Int> = db.transaction {
        var attempt = 0
        var allCount: Int? = null

        for (minutes in generateSequence(2L) { it * it }) {
            attempt++

            val dt = LocalDateTime.now().minusMinutes(minutes)

            val all = from(Thoughts)
                    .select(Thoughts.id)
                    .where { Thoughts.date gt dt }
                    .orderBy(Thoughts.date, false)
                    .limit(count)
                    .execute()
                    .map { it[Thoughts.id] }
                    .toList()

            if (all.size >= count) {
                return@transaction all
            }
            if (attempt > 10 && allCount == null) {
                allCount = from(Thoughts).select(Thoughts.id.count()).execute().single().get<Int>(0)
                if (allCount <= count) {
                    return@transaction from(Thoughts).select(Thoughts.id).execute().map { it[Thoughts.id] }.toList()
                }
            }
        }

        emptyList()
    }

    override fun latestForBubble(count: Long, bubbleId: Int): List<Int> = db.transaction {
        var attempt = 0
        var allCount: Int? = null

        for (minutes in generateSequence(2L) { it * it }) {
            attempt++

            val dt = LocalDateTime.now().minusMinutes(minutes)

            val all = from(Thoughts)
                    .select(Thoughts.id)
                    .where { Thoughts.date gt dt }
                    .where {Thoughts.bubbleId eq bubbleId}
                    .orderBy(Thoughts.date, false)
                    .limit(count)
                    .execute()
                    .map { it[Thoughts.id] }
                    .toList()

            if (all.size >= count) {
                return@transaction all
            }
            if (attempt > 10 && allCount == null) {
                allCount = from(Thoughts).select(Thoughts.id.count()).execute().single().get<Int>(0)
                if (allCount <= count) {
                    return@transaction from(Thoughts).select(Thoughts.id).execute().map { it[Thoughts.id] }.toList()
                }
            }
        }

        emptyList()
    }

    override fun close() {
    }
}
