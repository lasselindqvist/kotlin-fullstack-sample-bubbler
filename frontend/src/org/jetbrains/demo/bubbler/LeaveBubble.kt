package org.jetbrains.demo.bubbler

import kotlinx.html.*
import kotlinx.html.js.*
import org.jetbrains.common.*
import org.jetbrains.demo.bubbler.model.*
import react.*
import react.dom.*
import kotlin.browser.*
import kotlinx.coroutines.experimental.async

class LeaveBubbleComponent : ReactDOMComponent<UserProps, LeaveBubbleFormState>() {
    companion object : ReactComponentSpec<LeaveBubbleComponent, UserProps, LeaveBubbleFormState>

    init {
        state = LeaveBubbleFormState("", "", false, infoMessage = "", errorMessage = "")
    }

    override fun ReactDOMBuilder.render() {
        div {
            form(classes = "pure-form pure-form-stacked") {
                legend { +"Leave Bubble" }

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

                state.infoMessage?.takeIf(String::isNotEmpty)?.let { message ->
                    label {
                        +message
                    }
                }
                state.errorMessage?.takeIf(String::isNotEmpty)?.let { message ->
                    label {
                        +message
                    }
                }

                button(classes = "pure-button pure-button-primary") {
                    +"Leave"
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
            infoMessage = "Leaving Bubble succeeded!"
            errorMessage = ""
        }
        async {
            leaveBubble(state.userId, state.bubbleName)
        }.catch { err -> leaveFailed(err) }
    }

    private fun leaveFailed(err: Throwable) {
        if (err is LeavingBubbleFailedException) {
            setState {
                disabled = false
                infoMessage = ""
                errorMessage = err.message
            }
        } else {
            console.error("Leaving Bubble failed", err)
            setState {
                disabled = false
                infoMessage= ""
                errorMessage = "Leaving Bubble failed: please reload page and try again"
            }
        }
    }
}

class LeaveBubbleFormState(var userId: String, var bubbleName: String, var disabled: Boolean, var infoMessage: String?, var errorMessage: String?) : RState
