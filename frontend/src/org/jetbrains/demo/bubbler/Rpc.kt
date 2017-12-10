package org.jetbrains.demo.bubbler

import kotlinx.coroutines.experimental.await
import org.jetbrains.demo.bubbler.model.*
import org.w3c.dom.url.*
import org.w3c.fetch.*
import kotlin.browser.*
import kotlin.js.*

suspend fun index(): IndexResponse =
    getAndParseResult("/", null, ::parseIndexResponse)

suspend fun register(userId: String, password: String, displayName: String, email: String, phoneNumber: String): User =
    postAndParseResult("/register", URLSearchParams().apply {
        append("userId", userId)
        append("password", password)
        append("displayName", displayName)
        append("email", email)
        append("phoneNumber", phoneNumber)
    }, ::parseLoginOrRegisterResponse)

suspend fun pollFromLastTime(lastTime: String = ""): String =
    getAndParseResult<String>("/poll?lastTime=$lastTime", null, { json ->
        json.count
    })

suspend fun checkSession(): User =
    getAndParseResult("/login", null, ::parseLoginOrRegisterResponse)

suspend fun login(userId: String, password: String): User =
    postAndParseResult("/login", URLSearchParams().apply {
        append("userId", userId)
        append("password", password)
    }, ::parseLoginOrRegisterResponse)

suspend fun joinBubble(userId: String, bubbleName: String): Bubble =
        postAndParseResult("/join-bubble", URLSearchParams().apply {
            append("userId", userId)
            append("bubbleName", bubbleName)
        }, ::parseJoinBubbleResponse)

suspend fun showBubble(userId: String, bubbleName: String): ShowBubbleResponse =
        postAndParseResult("/show-bubble", URLSearchParams().apply {
            append("userId", userId)
            append("bubbleName", bubbleName)
        }, ::parseShowBubbleResponse)

suspend fun viewBubble(userId: String, bubbleName: String): ViewBubbleResponse =
        postAndParseResult("/view-bubble", URLSearchParams().apply {
            append("userId", userId)
            append("bubbleName", bubbleName)
        }, ::parseViewBubbleResponse)

suspend fun leaveBubble(userId: String, bubbleName: String): User =
        postAndParseResult("/leave-bubble", URLSearchParams().apply {
            append("userId", userId)
            append("bubbleName", bubbleName)
        }, ::parseLeaveBubbleResponse)


suspend fun postThoughtPrepare(): PostThoughtToken =
    getAndParseResult("/post-new", null, ::parseNewPostTokenResponse)

suspend fun postThought(replyTo: Int?, text: String, bubbleName: String, token: PostThoughtToken): Thought =
    postAndParseResult("/post-new", URLSearchParams().apply {
        append("text", text)
        append("bubbleName", bubbleName)
        append("date", token.date.toString())
        append("code", token.code)
        if (replyTo != null) {
            append("replyTo", replyTo.toString())
        }
    }, ::parsePostThoughtResponse)

suspend fun logoutUser() {
    window.fetch("/logout", object : RequestInit {
        override var method: String? = "POST"
        override var credentials: RequestCredentials? = "same-origin".asDynamic()
    }).await()
}

suspend fun deleteThought(id: Int, date: Long, code: String) =
    postAndParseResult("/thought/$id/delete", URLSearchParams().apply {
        append("date", date.toString())
        append("code", code)
    }, { Unit })

private fun parseIndexResponse(json: dynamic): IndexResponse {
    val top = json.top as Array<dynamic>
    val latest = json.latest as Array<dynamic>

    return IndexResponse(top.map(::parseThought), latest.map(::parseThought))
}

private fun parsePostThoughtResponse(json: dynamic): Thought {
    return parseThought(json.thought)
}

private fun parseThought(json: dynamic): Thought {
    return Thought(json.id, json.userId, json.bubbleId, json.text, json.date, json.replyTo)
}

private fun parseNewPostTokenResponse(json: dynamic): PostThoughtToken {
    return PostThoughtToken(json.user, json.bubbleId, json.date, json.code)
}

private fun parseLoginOrRegisterResponse(json: dynamic): User {
    if (json.error != null) {
        throw LoginOrRegisterFailedException(json.error.toString())
    }

    return User(json.user.userId, json.user.email, json.user.phoneNumber, json.user.displayName, json.user.passwordHash)
}

private fun parseJoinBubbleResponse(json: dynamic): Bubble {
    if (json.error != null) {
        throw JoiningBubbleFailedException(json.error.toString())
    }

    return Bubble(json.bubble.bubbleId, json.bubble.name, json.bubble.creationTime)
}

private fun parseShowBubbleResponse(json: dynamic): ShowBubbleResponse {
    if (json.error != null) {
        throw ShowingBubbleFailedException(json.error.toString())
    }

    return ShowBubbleResponse(json.bubble, json.top, json.latest, json.date, json.code)
}

private fun parseViewBubbleResponse(json: dynamic): ViewBubbleResponse {
    if (json.error != null) {
        throw ViewingBubbleFailedException(json.error.toString())
    }

    return ViewBubbleResponse(json.bubble, json.top, json.latest, json.date, json.code)
}

private fun parseLeaveBubbleResponse(json: dynamic): User {
    if (json.error != null) {
        throw LeavingBubbleFailedException(json.error.toString())
    }

    return User(json.user.userId, json.user.email, json.user.phoneNumber, json.user.displayName, json.user.passwordHash)
}

class LoginOrRegisterFailedException(message: String) : Throwable(message)

class JoiningBubbleFailedException(message: String) : Throwable(message)

class ShowingBubbleFailedException(message: String) : Throwable(message)

class ViewingBubbleFailedException(message: String) : Throwable(message)

class LeavingBubbleFailedException(message: String) : Throwable(message)

suspend fun <T> postAndParseResult(url: String, body: dynamic, parse: (dynamic) -> T): T =
    requestAndParseResult("POST", url, body, parse)

suspend fun <T> getAndParseResult(url: String, body: dynamic, parse: (dynamic) -> T): T =
    requestAndParseResult("GET", url, body, parse)

suspend fun <T> requestAndParseResult(method: String, url: String, body: dynamic, parse: (dynamic) -> T): T {
    val response = window.fetch(url, object: RequestInit {
        override var method: String? = method
        override var body: dynamic = body
        override var credentials: RequestCredentials? = "same-origin".asDynamic()
        override var headers: dynamic = json("Accept" to "application/json")
    }).await()
    return parse(response.json().await())
}
