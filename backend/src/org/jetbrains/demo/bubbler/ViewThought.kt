package org.jetbrains.demo.bubbler

import org.jetbrains.demo.bubbler.dao.*
import org.jetbrains.demo.bubbler.model.*
import org.jetbrains.ktor.application.*
import org.jetbrains.ktor.locations.*
import org.jetbrains.ktor.routing.*
import org.jetbrains.ktor.sessions.*

fun Route.viewThought(dao: BubblerStorage, hashFunction: (String) -> String) {
    get<ViewThought> {
        val user = call.sessionOrNull<Session>()?.let { dao.user(it.userId) }
        val date = System.currentTimeMillis()
        val code = if (user != null) call.securityCode(date, user, hashFunction) else null

        call.respond(ViewThoughtResponse(dao.getThought(it.id), date, code))
    }
}

