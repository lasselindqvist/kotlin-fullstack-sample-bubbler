package org.jetbrains.demo.bubbler

import kotlinx.html.*
import org.jetbrains.demo.bubbler.model.*
import react.*
import react.dom.*
import kotlinx.coroutines.experimental.launch

class BubbleView : ReactDOMComponent<BubbleView.Props, BubbleView.State>() {
    companion object : ReactComponentSpec<BubbleView, Props, State>

    init {
        state = State(props.bubbleName, emptyList(), emptyList(), true, Polling.NewMessages.None)
    }

    override fun componentWillMount() {
        super.componentWillMount()

        props.polling.listeners.add(pollerHandler)
        loadHome()
    }

    override fun componentWillUnmount() {
        super.componentWillUnmount()
        props.polling.listeners.remove(pollerHandler)
    }

    override fun ReactDOMBuilder.render() {
        div {
            h2 { +"Thoughts in your bubble" }

            if (state.loading) {
                p { +"Loading..." }
            } else {
                h3 { +"Top" }
                ThoughtsListComponent {
                    thoughts = state.top
                    show = props.showThought
                }

                h3 { +"Recent" }
                ThoughtsListComponent {
                    thoughts = state.latest
                    show = props.showThought
                }
            }
        }
    }

    private fun loadHome() {
        launch {
            val r = index()
            props.polling.start()
            setState {
                loading = false
                top = r.top
                latest = r.latest
            }
        }
    }

    private val pollerHandler = { m : Polling.NewMessages ->
        val oldMessages = state.newMessages
        setState {
            newMessages = m
        }
        if (oldMessages != m && m == Polling.NewMessages.None) {
            loadHome()
        }
    }

    class State(var bubbleName: String, var top: List<Thought>, var latest: List<Thought>, var loading: Boolean, var newMessages: Polling.NewMessages) : RState
    class Props(var bubbleName: String, var polling: Polling, var showThought: (Thought) -> Unit = {}) : RProps()
}