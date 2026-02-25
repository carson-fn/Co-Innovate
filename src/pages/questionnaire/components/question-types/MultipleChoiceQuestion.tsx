// React
import React, { useEffect } from 'react'

// Context
import { useQuestionnaireContext } from '../../context/QuestionnaireContext'

// Types
// import the type under a different name so it doesnt conflict with the component name
import { MultipleChoiceQuestion as MCQType } from '../../types'


function MultipleChoiceQuestion({ question }: { question: MCQType }) {

    const { answerCurrentQuestion: onAnswer, answers } = useQuestionnaireContext();
    const answerOptions = question.options
    const [answer, setAnswer] = React.useState("")
    const [highlightedOption, setHighlightedOption] = React.useState<string | null>(null);



    // update answers on question change
    useEffect(() => {
        // reset text box and highlighted option
        setAnswer("")
        setHighlightedOption(null)

        // if this question was already answered with the "other"/text option, show the previous answer on return
        if (answers[question.id]?.startsWith("Other: ")) {
            const previousAnswer = answers[question.id].substring(7) // remove "Other: " prefix
            setAnswer(previousAnswer)
        } else if (answers[question.id]) {
            setHighlightedOption(answers[question.id])
        } else {
            // otherwise reset the text box
            setAnswer("")
        }

    }, [question.id, answers])

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
                            <button className={"answer-button " + (highlightedOption === option.value ? "highlighted" : "")} key={option.value} onClick={() => onAnswer(option.value)}>
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
