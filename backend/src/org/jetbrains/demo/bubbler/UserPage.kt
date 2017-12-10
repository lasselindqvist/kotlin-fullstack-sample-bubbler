package org.jetbrains.demo.bubbler

import org.jetbrains.demo.bubbler.dao.*
import org.jetbrains.demo.bubbler.model.*
import org.jetbrains.ktor.application.*
import org.jetbrains.ktor.http.*
import org.jetbrains.ktor.locations.*
import org.jetbrains.ktor.routing.*

fun Route.userPage(dao: BubblerStorage) {
    get<UserThoughts> {
        val viewUser = dao.user(it.user)

        if (viewUser == null) {
            call.respond(HttpStatusCode.NotFound.description("User ${it.user} doesn't exist"))
        } else {
            val thoughts = dao.userThoughts(it.user).map { dao.getThought(it) }
            call.respond(UserThoughtsResponse(viewUser, thoughts))
        }
    }
}
