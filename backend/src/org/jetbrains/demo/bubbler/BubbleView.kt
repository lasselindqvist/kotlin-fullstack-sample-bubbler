package org.jetbrains.demo.bubbler

import org.jetbrains.demo.bubbler.dao.*
import org.jetbrains.demo.bubbler.model.*
import org.jetbrains.ktor.application.*
import org.jetbrains.ktor.html.*
import org.jetbrains.ktor.http.*
import org.jetbrains.ktor.locations.*
import org.jetbrains.ktor.response.*
import org.jetbrains.ktor.routing.*
import org.jetbrains.ktor.sessions.*
import java.time.*

fun Route.bubbleView(dao: BubblerStorage, hashFunction: (String) -> String) {
    get<BubbleView> {
        val user = call.sessionOrNull<Session>()?.let { dao.user(it.userId) }
        val bubbleName = it.bubbleName
        val bubble = dao.bubbleByName(bubbleName)
        if (bubble != null) {
            val date = System.currentTimeMillis()
            val code = if (user != null) call.securityCode(date, user, hashFunction) else null
            val top = dao.topForBubble(10, bubble.bubbleId).map(dao::getThought)
            val latest = dao.latestForBubble(10, bubble.bubbleId).map(dao::getThought)
            call.respond(ViewBubbleResponse(bubble, top, latest, date, code))
        } else {
            call.respond(HttpStatusCode.NotFound)
        }

    }
}