import React, { use } from 'react'
import "./styles.css"

// Components
import StartingPointSelector from './components/StartingPointSelector';
import QuestionRenderer from './components/QuestionRenderer'
import ProgressBar from './components/ProgressBar';

// Hooks
import { useQuestionnaire } from './hooks/useQuestionnaire';

// Types
import { Question, StartingPointKey } from './types'

// Data
import questions from './data/questions.json'



function QuestionnairePage() {
  const [startingPointKey, setStartingPointKey] = React.useState<StartingPointKey | null>(null);

  const questionnaire = useQuestionnaire(startingPointKey);

  if (!startingPointKey || !questionnaire) {
    return (<StartingPointSelector onSelect={(key: StartingPointKey) => setStartingPointKey(key)} />);
  }


  return (
    <div>
      <ProgressBar progress={questionnaire.progress} />
      <QuestionRenderer question={questionnaire.currentQuestion} onAnswer={questionnaire.answerCurrentQuestion} />
    </div>
  )
}

export default QuestionnairePage