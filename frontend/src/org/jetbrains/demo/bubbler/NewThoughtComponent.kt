package org.jetbrains.demo.bubbler

import kotlinx.html.*
import kotlinx.html.js.*
import org.jetbrains.common.*
import org.jetbrains.demo.bubbler.model.*
import react.*
import react.dom.*
import kotlinx.coroutines.experimental.async

class NewThoughtComponent : ReactDOMComponent<NewThoughtComponent.Props, NewThoughtComponent.State>() {
    companion object : ReactComponentSpec<NewThoughtComponent, Props, State>

    init {
        state = State()
    }

    override fun ReactDOMBuilder.render() {
        form(classes = "pure-form pure-form-stacked") {
            legend {
                if (props.replyTo == null) {
                    +"New thought"
                } else {
                    +"Reply"
                }
            }

            props.replyTo?.let { replyTo ->
                div {
                    + "reply to ${replyTo.userId}"
                }
            }

            props.inBubble?.let { bubble ->
                div {
                    + "in bubble ${bubble.name}"
                }
            }

            textArea(classes = "pure-input-1-2") {
                placeholder = "Your thought..."

                onChangeFunction = {
                    setState {
                        text = it.inputValue
                    }
                }
            }
            input(classes = "pure-input-1-2") {
                placeholder = "Think in a Bubble..."

                onChangeFunction = {
                    setState {
                        bubbleName = it.inputValue
                    }
                }
            }

            state.errorMessage?.let { message ->
                p { +message }
            }

            button(classes = "pure-button pure-button-primary") {
                + "Post"

                onClickFunction = {
                    it.preventDefault()
                    doPostThought()
                }
            }
        }
    }

    private fun doPostThought() {
        async {
            val token = postThoughtPrepare()
            val thought = postThought(props.replyTo?.id, state.text, state.bubbleName, token)
            onSubmitted(thought)
        }.catch { err -> onFailed(err) }
    }

    private fun onSubmitted(thought: Thought) {
        setState {
            errorMessage = null
        }

        props.showThought(thought)
    }

    private fun onFailed(err: Throwable) {
        setState {
            errorMessage = err.message + err.cause
        }
    }

    class State(var text: String = "", var bubbleName: String = "", var errorMessage: String? = null) : RState
    class Props(var inBubble: Bubble?, var replyTo: Thought? = null, var replyToUser: User? = null, var showThought: (Thought) -> Unit = {}) : RProps()
}
