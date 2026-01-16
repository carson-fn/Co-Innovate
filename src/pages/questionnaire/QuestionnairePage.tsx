import React, { use } from 'react'
import "./styles.css"

import StartingPointSelector from './components/StartingPointSelector';
import QuestionRenderer from './components/QuestionRenderer'
import { useQuestionnaire } from './hooks/useQuestionnaire';

import { Question, StartingPointKey } from './types'

import questions from './data/questions.json'



function QuestionnairePage() {
  const [startingPointKey, setStartingPointKey] = React.useState<StartingPointKey | null>(null);

  const questionnaire = useQuestionnaire(startingPointKey);

  if (!startingPointKey || !questionnaire) {
    return (<StartingPointSelector onSelect={(key: StartingPointKey) => setStartingPointKey(key)} />);
  }


  return (
    <div>
        <QuestionRenderer question={questionnaire.currentQuestion} onAnswer={questionnaire.answerCurrentQuestion} />
    </div>
  )
}

export default QuestionnairePage