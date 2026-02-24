import React, { useEffect } from 'react'

// Context
import { useQuestionnaireContext } from '../../context/QuestionnaireContext'

// Types
import { MultiSelectQuestion as MSQType } from '../../types'



function MultiSelectQuestion({ question }: { question: MSQType }) {

    const { answerCurrentQuestion: onAnswer, answers } = useQuestionnaireContext();
    const answerOptions = question.options || []

    const [selectedAnswers, setSelectedAnswers] = React.useState<string[]>([])
    const [otherText, setOtherText] = React.useState("")
    const [showSubmitHint, setShowSubmitHint] = React.useState(false)

    const hasSelection = selectedAnswers.length > 0 || otherText.trim() !== ''

    // update answers on question change
    useEffect(() => {
        setSelectedAnswers([])
        setOtherText("")
        setShowSubmitHint(false)

        // check if this question was already answered
        const previousAnswers = answers[question.id]
        if (previousAnswers) {
            // extract the previous answers
            const parts = previousAnswers.split(';')    // stored answers are separated by ';'
                .map((s: string) => s.trim())           // there shouldn't be extra spaces but trim just in case
                .filter((s: string) => Boolean(s));     // remove empty strings
            // TODO add a filter to ensure answers match options for the current question

            // set the selected answers
            const selected: string[] = []
            parts.forEach((s: string) => {
                if (s.startsWith("Other: ")) {
                    selected.push("Other")
                    setOtherText(s.substring(7))
                } else {
                    selected.push(s)
                }
            })
            setSelectedAnswers(selected)
        }

    }, [question.id])

    // helper function to add/remove options from selectedAnswers
    const toggleOption = (value: string) => {
        setShowSubmitHint(false)
        setSelectedAnswers(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value])
    }


    // collect the selected answers and submit them
    const submitAnswers = () => {
        const toBeSubmitted: string[] = []
        selectedAnswers.forEach(s => {
            if (s === 'Other') {
                if (otherText.trim() !== '') toBeSubmitted.push('Other: ' + otherText.trim())
            } else {
                toBeSubmitted.push(s)
            }
        })

        // if user typed in the other box but didn't toggle the Other option, include it
        if (otherText.trim() !== '' && !selectedAnswers.includes('Other')) {
            toBeSubmitted.push('Other: ' + otherText.trim())
        }

        onAnswer(toBeSubmitted.join('; '))
    }

    const handleSubmitClick = () => {
        if (!hasSelection) {
            setShowSubmitHint(true)
            return
        }

        setShowSubmitHint(false)
        submitAnswers()
    }



    return (
        <div>
            <h3 className="question-text">{question.text}</h3>
            <div className="answer-group">
                <p>(Select all that apply)</p>
                {answerOptions.map(option => {
                    if (option.hasTextInput) {
                        // render a text input for the 'Other' option
                        // if there is text in it, it is considered selected
                        return (
                            <input
                                type="text"
                                key={option.value}
                                className="text-input"
                                value={otherText}
                                placeholder={option.label}
                                onChange={(e) => {
                                    setShowSubmitHint(false)
                                    setOtherText(e.target.value)
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault()
                                        handleSubmitClick()
                                    }
                                }}
                            />
                        )
                    } else {
                        // regular options are togglable
                        return (
                            <button
                                key={option.value}
                                className={"answer-button " + (selectedAnswers.includes(option.value) ? "selected" : "")}
                                onClick={() => toggleOption(option.value)}
                            >
                                {option.label}
                            </button>
                        )
                    }
                })}
            </div>

            <div className="submit-container">
                <span className="submit-tooltip-wrap" title={!hasSelection ? "Please select an answer" : undefined}>
                    <button
                        className={"answer-button " + (!hasSelection ? "is-disabled" : "")}
                        onClick={handleSubmitClick}
                        aria-disabled={!hasSelection}
                    >
                        Next
                    </button>
                </span>
                {showSubmitHint ? <p className="submit-hint">Please select an answer.</p> : null}
            </div>
        </div>
    )

}

export default MultiSelectQuestion
