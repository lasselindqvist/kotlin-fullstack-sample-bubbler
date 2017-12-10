package org.jetbrains.demo.bubbler.model

interface RpcData

data class IndexResponse(val top: List<Thought>, val latest: List<Thought>) : RpcData
data class PostThoughtToken(val user: String, val bubbleId: Int?, val date: Long, val code: String) : RpcData
data class PostThoughtResult(val thought: Thought) : RpcData
data class UserThoughtsResponse(val user: User, val thoughts: List<Thought>) : RpcData
data class ViewThoughtResponse(val thought: Thought, val date: Long, val code: String?) : RpcData
data class ViewBubbleResponse(val bubble: Bubble, val top: List<Thought>, val latest: List<Thought>, val date: Long, val code: String?) : RpcData
data class LoginResponse(val user: User? = null, val error: String? = null) : RpcData
data class JoinBubbleResponse(val userId: String, val bubbleId: String, val error: String? = null) : RpcData
data class LeaveBubbleResponse(val userId: String,val bubbleId: String, val error: String? = null) : RpcData
data class ShowBubbleResponse(val bubble: Bubble?, val top: List<Thought>, val latest: List<Thought>, val date: Long, val code: String?) : RpcData