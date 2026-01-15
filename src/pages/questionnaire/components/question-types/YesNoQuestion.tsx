import React from 'react'
import { Question } from '../../types'

function YesNoQuestion({ question }: { question: Question }) {
  return (
    <div>
        <h3>{question.text}</h3>
        <button>Yes</button>
        <button>No</button>
    </div>
  )
}

export default YesNoQuestion