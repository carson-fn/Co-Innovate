import React from 'react'

// import the type under a different name so it doesnt conflict with the component name
import { MultipleChoiceQuestion as MCQType, OnAnswerFunction } from '../../types'

function MultipleChoiceQuestion({ question, onAnswer }: { question: MCQType; onAnswer: OnAnswerFunction }) {
    const answerOptions = question.options

    return (
        <div>
            <h3 className="question-text">{question.text}</h3>
            <div className="answer-group">
                {answerOptions.map((option) => (
                    <button className="answer-button" key={option.value} onClick={() => onAnswer(option.value)}>
                        {option.label}
                    </button>
                ))}
        </div>
    </div >
  )
}

export default MultipleChoiceQuestion
