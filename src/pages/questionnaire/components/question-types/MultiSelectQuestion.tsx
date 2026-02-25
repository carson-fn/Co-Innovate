import React, { useEffect } from 'react'

// Context
import { useQuestionnaireContext } from '../../context/QuestionnaireContext'

// Types
import { MultiSelectQuestion as MSQType } from '../../types'
import NextButton from './NextButton'



function MultiSelectQuestion({ question }: { question: MSQType }) {

    const { answerCurrentQuestion: onAnswer, answers } = useQuestionnaireContext();
    const answerOptions = question.options || []
    const OTHER_VALUE = "other"
    const OTHER_PREFIX = "Other: "

    const [selectedAnswers, setSelectedAnswers] = React.useState<string[]>([])
    const [otherText, setOtherText] = React.useState("")
    const hasSelection = selectedAnswers.length > 0 || otherText.trim() !== ''

    // update answers on question change
    useEffect(() => {
        setSelectedAnswers([])
        setOtherText("")

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
                if (s.toLowerCase().startsWith(OTHER_PREFIX.toLowerCase())) {
                    selected.push(OTHER_VALUE)
                    setOtherText(s.substring(OTHER_PREFIX.length))
                } else {
                    selected.push(s)
                }
            })
            setSelectedAnswers(selected)
        }

    }, [question.id, answers])

    // helper function to add/remove options from selectedAnswers
    const toggleOption = (value: string) => {
        setSelectedAnswers(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value])
    }


    // collect the selected answers and submit them
    const submitAnswers = () => {
        const toBeSubmitted: string[] = []
        selectedAnswers.forEach(s => {
            if (s === OTHER_VALUE) {
                if (otherText.trim() !== '') toBeSubmitted.push(OTHER_PREFIX + otherText.trim())
            } else {
                toBeSubmitted.push(s)
            }
        })

        // if user typed in the other box but didn't toggle the Other option, include it
        if (otherText.trim() !== '' && !selectedAnswers.includes(OTHER_VALUE)) {
            toBeSubmitted.push(OTHER_PREFIX + otherText.trim())
        }

        onAnswer(toBeSubmitted.join('; '))
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
                                onChange={(e) => setOtherText(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault()
                                        if (hasSelection) {
                                            submitAnswers()
                                        }
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

            <NextButton canSubmit={hasSelection} onSubmit={submitAnswers} />
        </div>
    )

}

export default MultiSelectQuestion
