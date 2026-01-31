// React
import React, { useEffect } from 'react'

// Types
// import the type under a different name so it doesnt conflict with the component name
import { MultipleChoiceQuestion as MCQType, OnAnswerFunction } from '../../types'

function MultipleChoiceQuestion({ question, onAnswer }: { question: MCQType; onAnswer: OnAnswerFunction }) {
    const answerOptions = question.options
    const [answer, setAnswer] = React.useState("")

    // reset text box on question change
    useEffect(() => setAnswer(""), [question.id])

    // to submit the text input from the "other" option
    const submitTextInput = () => {
        if (answer.trim() !== "") {
            onAnswer("Other: " + answer)
        }
    }

    return (
        <div>
            <h3 className="question-text">{question.text}</h3>
            <div className="answer-group">
                {answerOptions.map((option) => {
                
                    if (option.hasTextInput) {
                        // for "other" options where there is a text input
                        return (
                            <input
                                type="textbox"
                                key={option.value}
                                className="text-input"
                                value={answer}
                                placeholder={option.label}
                                onChange={(e) => setAnswer(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && submitTextInput()}
                            ></input>
                        )

                    } else {
                        // regular multiple choice option
                        return (
                            <button className="answer-button" key={option.value} onClick={() => onAnswer(option.value)}>
                                {option.label}
                            </button>
                        )
                    }
                })}
            </div>
        </div >
    )
}

export default MultipleChoiceQuestion
