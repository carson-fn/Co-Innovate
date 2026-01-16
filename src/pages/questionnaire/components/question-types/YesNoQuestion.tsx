import React from 'react'
import { Question } from '../../types'

function YesNoQuestion({ question, onAnswer }: { question: Question, onAnswer: (answer: string) => void }) {
  return (
    <div>
        <h3>{question.text}</h3>
        <button onClick={() => onAnswer("yes")}>Yes</button>
        <button onClick={() => onAnswer("no")}>No</button>
    </div>
  )
}

export default YesNoQuestion