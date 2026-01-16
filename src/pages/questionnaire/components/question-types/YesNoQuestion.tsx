import React from 'react'
// import the type under a different name so it doesnt conflict with the component name
import { YesNoQuestion as YNQType, OnAnswerFunction } from '../../types'

function YesNoQuestion({ question, onAnswer }: { question: YNQType, onAnswer: OnAnswerFunction }) {
  return (
    <div>
        <h3>{question.text}</h3>
        <button onClick={() => onAnswer("yes")}>Yes</button>
        <button onClick={() => onAnswer("no")}>No</button>
    </div>
  )
}

export default YesNoQuestion