import React from 'react'
import { TextQuestion as TQType, OnAnswerFunction } from '../../types'

function TextQuestion({ question, onAnswer }: { question: TQType, onAnswer: OnAnswerFunction }) {
    const [answer, setAnswer] = React.useState("");

    return (
        <div>
            <h3 className="question-text">{question.text}</h3>

            <input
                type="textbox"
                className="text-input"
                onChange={(e) => setAnswer(e.target.value)}
            ></input>
            <button className="answer-button" onClick={() => onAnswer(answer)}>Submit</button>

        </div>
    )
}

export default TextQuestion