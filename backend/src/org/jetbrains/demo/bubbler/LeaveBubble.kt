package org.jetbrains.demo.bubbler

import org.jetbrains.demo.bubbler.dao.*
import org.jetbrains.demo.bubbler.model.*
import org.jetbrains.ktor.application.*
import org.jetbrains.ktor.http.*
import org.jetbrains.ktor.locations.*
import org.jetbrains.ktor.routing.*
import org.jetbrains.ktor.sessions.*

fun Route.leaveBubble(dao: BubblerStorage, hashFunction: (String) -> String) {
    get<LeaveBubble> {
        val user = call.sessionOrNull<Session>()?.let { dao.user(it.userId) }
        if (user == null) {
            call.respond(HttpStatusCode.Forbidden)
        } else {
            val date = System.currentTimeMillis()
            val code = call.securityCode(date, user, hashFunction)
            if (!call.verifyCode(date, user, code, hashFunction)) {
                call.respond(HttpStatusCode.Forbidden)
            } else {
                call.respond(LeaveBubbleResponse(user, null, ""))
            }
        }
    }
    post<LeaveBubble> {
        val user = call.sessionOrNull<Session>()?.let { dao.user(it.userId) }
        val bubbleName = it.bubbleName;
        val bubble = call.sessionOrNull<Session>()?.let { dao.bubbleByName(bubbleName) }
        if (user == null) {
            call.respond(HttpStatusCode.Forbidden)
        } else {
            if (bubble == null) {
                val bubbleId = dao.createBubble(bubbleName)
                val newBubble = dao.bubble(bubbleId)
                call.respond(LeaveBubbleResponse(user, newBubble, "Could not leave the Bubble. You must be a member to be able to leave."))
            } else {
                dao.leaveBubble(user.userId, bubble.bubbleId)
                call.respond(LeaveBubbleResponse(user, bubble, ""))
            }
        }
    }
}
