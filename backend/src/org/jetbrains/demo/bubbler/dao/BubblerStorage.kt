package org.jetbrains.demo.bubbler.dao

import org.jetbrains.demo.bubbler.model.*
import java.io.*
import java.time.*

interface BubblerStorage : Closeable {
    fun countReplies(id: Int): Int
    fun createThought(user: String, bubbleId: Int?, text: String, replyTo: Int? = null, date: LocalDateTime = LocalDateTime.now()): Int
    fun deleteThought(id: Int)
    fun getThought(id: Int): Thought
    fun userThoughts(userId: String): List<Int>
    fun user(userId: String, hash: String? = null): User?
    fun createBubble(name: String, date: LocalDateTime = LocalDateTime.now()): Int
    fun joinBubble(userId: String, bubbleId: Int): Int
    fun leaveBubble(userId: String, bubbleId: Int)
    fun bubble(bubbleId: Int): Bubble
    fun bubbleByName(bubbleName: String): Bubble?
    fun userByEmail(email: String): User?
    fun userByPhoneNumber(phoneNumber: String): User?
    fun createUser(user: User)
    fun top(count: Long = 10): List<Int>
    fun latest(count: Long = 10): List<Int>
    fun topForBubble(count: Long = 10, bubbleId: Int): List<Int>
    fun latestForBubble(count: Long = 10, bubbleId: Int): List<Int>
}


