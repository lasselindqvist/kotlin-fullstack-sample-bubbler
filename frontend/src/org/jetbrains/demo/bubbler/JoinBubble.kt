package org.jetbrains.demo.bubbler

import kotlinx.html.*
import kotlinx.html.js.*
import org.jetbrains.common.*
import org.jetbrains.demo.bubbler.model.*
import react.*
import react.dom.*
import kotlin.browser.*
import kotlinx.coroutines.experimental.async

class JoinBubbleComponent : ReactDOMComponent<UserProps, JoinBubbleFormState>() {
    companion object : ReactComponentSpec<JoinBubbleComponent, UserProps, JoinBubbleFormState>

    init {
        state = JoinBubbleFormState("", "", false, infoMessage = "", errorMessage = "")
    }

    override fun ReactDOMBuilder.render() {
        div {
            form(classes = "pure-form pure-form-stacked") {
                legend { +"Join Bubble" }

                fieldSet(classes = "pure-group") {
                    input(type = InputType.text, name = "bubbleName") {
                        value = state.bubbleName
                        placeholder = "Name of the Bubble"
                        disabled = state.disabled

                        onChangeFunction = {
                            setState {
                                bubbleName = it.inputValue
                            }
                        }
                    }
                }

                state.errorMessage?.takeIf(String::isNotEmpty)?.let { message ->
                    label {
                        +message
                    }
                }
                state.infoMessage?.takeIf(String::isNotEmpty)?.let { message ->
                    label {
                        +message
                    }
                }

                button(classes = "pure-button pure-button-primary") {
                    +"Join"
                    disabled = state.disabled

                    onClickFunction = {
                        it.preventDefault()
                        doJoin()
                    }
                }
            }
        }
    }

    private fun doJoin() {
        setState {
            disabled = false
            infoMessage = "Joining Bubble succeeded!"
            errorMessage = ""
        }
        async {
            joinBubble(state.userId, state.bubbleName)
        }.catch { err -> joinFailed(err) }
    }

    private fun joinFailed(err: Throwable) {
        if (err is JoiningBubbleFailedException) {
            setState {
                disabled = false
                infoMessage = ""
                errorMessage = err.message
            }
        } else {
            console.error("Joining Bubble failed", err)
            setState {
                disabled = false
                infoMessage = ""
                errorMessage = "Joining Bubble failed: please reload page and try again"
            }
        }
    }
}

class JoinBubbleFormState(var userId: String, var bubbleName: String, var disabled: Boolean, var infoMessage: String?, var errorMessage: String?) : RState
