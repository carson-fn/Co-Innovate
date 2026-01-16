import React, { use } from 'react'

import QuestionRenderer from './components/QuestionRenderer'
import { useQuestionnaire } from './hooks/useQuestionnaire';

import { Question } from './types'
import questions from './data/questions.json'


function QuestionnairePage() {
  const questionnaire = useQuestionnaire();

  return (
    <div>
        <QuestionRenderer question={questionnaire.currentQuestion} onAnswer={questionnaire.answerCurrentQuestion} />
    </div>
  )
}

export default QuestionnairePage