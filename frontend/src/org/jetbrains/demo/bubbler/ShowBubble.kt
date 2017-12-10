package org.jetbrains.demo.bubbler

import kotlinx.html.*
import kotlinx.html.js.*
import org.jetbrains.common.*
import org.jetbrains.demo.bubbler.model.*
import react.*
import react.dom.*
import kotlin.browser.*
import kotlinx.coroutines.experimental.async
import kotlinx.coroutines.experimental.launch

class ShowBubbleComponent : ReactDOMComponent<ShowBubbleComponent.Props, ShowBubbleComponent.State>() {
    companion object : ReactComponentSpec<ShowBubbleComponent, Props, State>

    init {
        state = State(true,"", null, emptyList(), emptyList(), "", false, infoMessage = "", errorMessage = "")
    }

    override fun ReactDOMBuilder.render() {
        fun UL.thoughtLi(t: Thought) {
            li {
                section(classes = "post") {
                    header(classes = "post-header") {
                        p(classes = "post-meta") {
                            a(href = "javascript:void(0)") {
                                +t.date
                                +" by "
                                +t.userId

                            }
                        }
                    }
                    div(classes = "post-description") {
                        ReactMarkdownComponent {
                            source = t.text
                        }
                    }
                }
            }
        }

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

                button(classes = "pure-button pure-button-primary") {
                    +"Show"
                    disabled = state.disabled

                    onClickFunction = {
                        it.preventDefault()
                        doShow()

                    }
                }
            }

            if (state.showBubbleResponse != null && !state.loading) {
                val latest = state.latest.toMutableList()
                val top = state.top.toMutableList()
                div {
                    h2 { +"Thoughts" }
                    ul {
                        h3 { +"Top" }
                        if (!top.isEmpty()) {
                            for (t in top) {
                                thoughtLi(t)
                            }
                        }
                    }

                    ul {
                        h3 { +"Recent" }
                        if (!latest.isEmpty()) {
                            for (t in latest) {
                                thoughtLi(t)
                            }
                        }
                    }
                }

            }
        }
    }


    private fun doShow() {
        setState {
            loading = true
            disabled = false
            infoMessage = "Showing Bubble succeeded!"
            errorMessage = ""
        }
        async {
            val localResponse = showBubble(state.userId, state.bubbleName)
            state.showBubbleResponse = localResponse
            state.latest = localResponse.latest
            state.top = localResponse.top
            state.loading = false
        }.catch { err -> showFailed(err) }
    }

    private fun showFailed(err: Throwable) {
        if (err is ShowingBubbleFailedException) {
            setState {
                disabled = false
                infoMessage = ""
                errorMessage = err.message
            }
        } else {
            console.error("Showing Bubble failed", err)
            setState {
                disabled = false
                infoMessage = ""
                errorMessage = "Showing Bubble failed: please reload page and try again"
            }
        }
    }
    class Props(var showThought: (Thought) -> Unit = {}) : RProps()
    class State(var loading: Boolean, var userId: String, var showBubbleResponse: ShowBubbleResponse?, var top: List<Thought>, var latest: List<Thought>, var bubbleName: String, var disabled: Boolean, var infoMessage: String?, var errorMessage: String?) : RState

}


