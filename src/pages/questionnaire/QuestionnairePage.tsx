import React from 'react'
import QuestionRenderer from './components/QuestionRenderer'
import { Question } from './types'

import questions from './data/questions.json'

function QuestionnairePage() {
  return (
    <div>
        <QuestionRenderer question={questions["portfolio_1"] as Question} />
    </div>
  )
}

export default QuestionnairePage