package org.jetbrains.demo.bubbler.model

import java.time.LocalDateTime

data class Thought(val id: Int, val userId: String, val bubbleId: Int?, val text: String, val date: String, val replyTo: Int?)
data class User(val userId: String, val email: String, val phoneNumber: String, val displayName: String, val passwordHash: String)
data class Bubble(val bubbleId: Int, val name: String, val creationTime: LocalDateTime)
