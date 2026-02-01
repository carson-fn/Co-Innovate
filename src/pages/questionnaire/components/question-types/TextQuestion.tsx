// React
import { useEffect, useState } from 'react'

// Context
import { useQuestionnaireContext } from '../../context/QuestionnaireContext'

// Types
import { TextQuestion as TQType, OnAnswerFunction } from '../../types'


function TextQuestion({ question }: { question: TQType }) {
    
    const { answerCurrentQuestion: onAnswer } = useQuestionnaireContext()
    const [answer, setAnswer] = useState("");

    // reset text box on question change
    useEffect(() => setAnswer(""), [question.id])

    const submitTextInput = () => {
        if (answer.trim() !== "") {
            onAnswer(answer)
        }
    }

    return (
        <div>
            <h3 className="question-text">{question.text}</h3>

            <input
                type="textbox"
                className="text-input"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && submitTextInput()}
            ></input>
            <button className="answer-button" onClick={() => onAnswer(answer)}>Submit</button>

        </div>
    )
}

export default TextQuestion