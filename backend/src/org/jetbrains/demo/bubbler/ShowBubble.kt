package org.jetbrains.demo.bubbler

import org.jetbrains.demo.bubbler.dao.*
import org.jetbrains.demo.bubbler.model.*
import org.jetbrains.ktor.application.*
import org.jetbrains.ktor.http.*
import org.jetbrains.ktor.locations.*
import org.jetbrains.ktor.response.etag
import org.jetbrains.ktor.routing.*
import org.jetbrains.ktor.sessions.*

fun Route.showBubble(dao: BubblerStorage, hashFunction: (String) -> String) {

    get<ShowBubble> {
        val user = call.sessionOrNull<Session>()?.let { dao.user(it.userId) }
        if (user == null) {
            call.respond(HttpStatusCode.Forbidden)
        } else {
            val date = System.currentTimeMillis()
            val code = call.securityCode(date, user, hashFunction)
            if (!call.verifyCode(date, user, code, hashFunction)) {
                call.respond(HttpStatusCode.Forbidden)
            } else {
                call.respond(ShowBubbleResponse(null, emptyList(), emptyList(), date, code))
            }
        }
    }
    post<ShowBubble> {
        val user = call.sessionOrNull<Session>()?.let { dao.user(it.userId) }
        val bubbleName = it.bubbleName;
        val bubble = call.sessionOrNull<Session>()?.let { dao.bubbleByName(bubbleName) }
        if (user == null) {
            call.respond(HttpStatusCode.Forbidden)
        } else {
            if (bubble == null) {
                val bubbleId = dao.createBubble(bubbleName)
                val newBubble = dao.bubble(bubbleId)
                val date = System.currentTimeMillis()
                val code = call.securityCode(date, user, hashFunction)
                val top = dao.topForBubble(10, newBubble.bubbleId).map(dao::getThought)
                val latest = dao.latestForBubble(10, newBubble.bubbleId).map(dao::getThought)
                call.respond(ShowBubbleResponse(newBubble, top, latest, date, code))
            } else {
                val date = System.currentTimeMillis()
                val code = call.securityCode(date, user, hashFunction)
                val top = dao.topForBubble(10, bubble.bubbleId).map(dao::getThought)
                val latest = dao.latestForBubble(10, bubble.bubbleId).map(dao::getThought)
                call.respond(ShowBubbleResponse(bubble, top, latest, date, code))
            }
        }
    }
}
