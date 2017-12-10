package org.jetbrains.demo.bubbler.dao

import org.jetbrains.squash.definition.*

object UserBubbles : TableDefinition() {
    val id = integer("id").autoIncrement().primaryKey()
    val userId = varchar("user_id", 20).index()
    val bubbleId = integer("bubble_id").index()
}
