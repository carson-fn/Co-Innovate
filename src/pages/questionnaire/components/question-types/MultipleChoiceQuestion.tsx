import React from 'react'
// import the type under a different name so it doesnt conflict with the component name
import { MultipleChoiceQuestion as MCQType, OnAnswerFunction } from '../../types'

function MultipleChoiceQuestion({ question, onAnswer }: { question: MCQType; onAnswer: OnAnswerFunction }) {
    const answerOptions = question.options
  
    return (
    <div>
        <h3>{question.text}</h3>
        {answerOptions.map((option) => (
            <button key={option.value} onClick={() => onAnswer(option.value)}>
                {option.label}
            </button>
        ))}
    </div>
  )
}

export default MultipleChoiceQuestion
