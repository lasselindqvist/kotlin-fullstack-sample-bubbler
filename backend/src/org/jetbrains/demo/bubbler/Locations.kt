package org.jetbrains.demo.bubbler

import org.jetbrains.ktor.locations.*


@location("/")
class Index()


@location("/poll")
class Poll(val lastTime: String = "")

@location("/post-new")
data class PostThought(val text: String = "", val bubbleName: String = "", val date: Long = 0L, val code: String = "", val replyTo: Int? = null)

@location("/thought/{id}/delete")
data class ThoughtDelete(val id: Int, val date: Long, val code: String)

@location("/thought/{id}")
data class ViewThought(val id: Int)

@location("/bubble/{bubbleName}")
data class BubbleView(val bubbleName: String)

@location("/user/{user}")
@Deprecated("")
data class UserPage(val user: String)

@location("/user/{user}/thoughts")
data class UserThoughts(val user: String)

@location("/register")
data class Register(val userId: String = "", val displayName: String = "", val email: String = "", val phoneNumber: String = "", val password: String = "", val error: String = "")

@location("/login")
data class Login(val userId: String = "", val password: String = "", val error: String = "")


@location("/logout")
class Logout()

@location("/join-bubble")
data class JoinBubble(val userId: String = "", val bubbleName: String = "", val error: String = "")

@location("/leave-bubble")
data class LeaveBubble(val userId: String = "", val bubbleName: String = "", val error: String = "")

@location("/show-bubble")
data class ShowBubble(val userId: String = "", val bubbleName: String = "", val error: String = "")

@location("/view-bubble")
data class ViewBubble(val userId: String = "", val bubbleName: String = "", val error: String = "")