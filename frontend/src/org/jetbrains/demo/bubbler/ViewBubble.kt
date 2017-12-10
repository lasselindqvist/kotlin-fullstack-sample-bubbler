package org.jetbrains.demo.bubbler

import kotlinx.html.*
import kotlinx.html.js.*
import org.jetbrains.common.*
import org.jetbrains.demo.bubbler.model.*
import react.*
import react.dom.*
import kotlin.browser.*
import kotlinx.coroutines.experimental.async

class ViewBubbleComponent : ReactDOMComponent<ViewBubbleComponent.Props, ViewBubbleFormState>() {
    companion object : ReactComponentSpec<ViewBubbleComponent, ViewBubbleComponent.Props, ViewBubbleFormState>

    init {
        state = ViewBubbleFormState("", null, emptyList(), emptyList(), "", false, infoMessage = "", errorMessage = "")
    }

    override fun ReactDOMBuilder.render() {
        div {
            form(classes = "pure-form pure-form-stacked") {
                legend { +"Show Bubble" }

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

                if (state.viewBubbleResponse != null) {
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

                button(classes = "pure-button pure-button-primary") {
                    +"Show"
                    disabled = state.disabled

                    onClickFunction = {
                        it.preventDefault()
                        doView()
                    }
                }
            }
        }
    }

    private fun doView() {
        setState {
            disabled = false
            infoMessage = "Viewing Bubble succeeded!"
            errorMessage = ""
        }
        async {
            state.viewBubbleResponse = viewBubble(state.userId, state.bubbleName)
            val viewBubbleResponse = state.viewBubbleResponse
            if (viewBubbleResponse != null) {
                state.latest = viewBubbleResponse.latest
                state.top = viewBubbleResponse.top
            }
        }.catch { err -> viewFailed(err) }
    }

    private fun viewFailed(err: Throwable) {
        if (err is ShowingBubbleFailedException) {
            setState {
                disabled = false
                infoMessage = ""
                errorMessage = err.message
            }
        } else {
            console.error("Viewing Bubble failed", err)
            setState {
                disabled = false
                infoMessage = ""
                errorMessage = "Viewing Bubble failed: please reload page and try again"
            }
        }
    }
    class Props(var showThought: (Thought) -> Unit = {}) : RProps()
}

class ViewBubbleFormState(var userId: String, var viewBubbleResponse: ViewBubbleResponse?, var top: List<Thought>, var latest: List<Thought>, var bubbleName: String, var disabled: Boolean, var infoMessage: String?, var errorMessage: String?) : RState

