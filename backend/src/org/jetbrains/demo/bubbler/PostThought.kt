package org.jetbrains.demo.bubbler

import org.jetbrains.demo.bubbler.dao.*
import org.jetbrains.demo.bubbler.model.*
import org.jetbrains.ktor.application.*
import org.jetbrains.ktor.http.*
import org.jetbrains.ktor.locations.*
import org.jetbrains.ktor.routing.*
import org.jetbrains.ktor.sessions.*

fun Route.postThought(dao: BubblerStorage, hashFunction: (String) -> String) {
    get<PostThought> {
        val user = call.sessionOrNull<Session>()?.let { dao.user(it.userId) }


        if (user == null) {
            call.respond(HttpStatusCode.Forbidden)
        } else {
            val date = System.currentTimeMillis()
            val code = call.securityCode(date, user, hashFunction)
            call.respond(PostThoughtToken(user.userId, "", date, code))
        }
    }
    post<PostThought> {
        val user = call.sessionOrNull<Session>()?.let { dao.user(it.userId) }
        if (user == null || !call.verifyCode(it.date, user, it.code, hashFunction)) {
            call.respond(HttpStatusCode.Forbidden)
        } else {
            val bubbleName = it.bubbleName;
            val bubble = dao.bubbleByName(bubbleName)
            if (bubble == null) {
                val bubbleId = dao.createBubble(bubbleName)
                val newBubble = dao.bubble(bubbleId)
                val id = dao.createThought(user.userId, newBubble.bubbleId, it.text, it.replyTo)
                call.respond(PostThoughtResult(dao.getThought(id)))
            } else {
                val id = dao.createThought(user.userId, bubble.bubbleId, it.text, it.replyTo)
                call.respond(PostThoughtResult(dao.getThought(id)))

            }
        }
    }
}