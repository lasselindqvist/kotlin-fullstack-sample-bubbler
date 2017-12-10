package org.jetbrains.demo.bubbler.dao

import org.jetbrains.squash.definition.*

object Bubbles : TableDefinition() {
    val id = integer("id").autoIncrement().primaryKey()
    val name = varchar("text", 1024)
    val creationTime = datetime("date")
}

