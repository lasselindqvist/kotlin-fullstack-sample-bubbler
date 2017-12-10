package org.jetbrains.demo.bubbler.model

interface RpcData

data class IndexResponse(val top: List<Thought>, val latest: List<Thought>) : RpcData
data class PostThoughtToken(val user: String, val bubbleName: String?, val date: Long, val code: String) : RpcData
data class PostThoughtResult(val thought: Thought) : RpcData
data class UserThoughtsResponse(val user: User, val thoughts: List<Thought>) : RpcData
data class ViewThoughtResponse(val thought: Thought, val date: Long, val code: String?) : RpcData
data class ViewBubbleResponse(val bubble: Bubble, val top: List<Thought>, val latest: List<Thought>, val date: Long, val code: String?) : RpcData
data class LoginResponse(val user: User? = null, val error: String? = null) : RpcData
data class PollResponse(val time: Long, val count: String) : RpcData
data class JoinBubbleResponse(val user: User, val bubble: Bubble?, val info: String, val error: String? = null) : RpcData
data class LeaveBubbleResponse(val user: User, val bubble: Bubble?, val info: String, val error: String? = null) : RpcData
data class ShowBubbleResponse(val bubble: Bubble?, val top: List<Thought>, val latest: List<Thought>, val date: Long, val code: String?) : RpcData