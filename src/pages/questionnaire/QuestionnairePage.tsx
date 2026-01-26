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
import QuestionnaireComplete from './components/QuestionnaireComplete';


function QuestionnairePage() {

  const [startingPointKey, setStartingPointKey] = React.useState<StartingPointKey | null>("portfolio");
  const questionnaire = useQuestionnaire(startingPointKey);

  if (questionnaire.isComplete) {
    return (<QuestionnaireComplete answers={questionnaire.answers}/>)
  }

  return (
    <div className="questionnaire-page">
      <h1 className="question-text">Get Started</h1>
      <p>Sometimes getting started is the hardest part, so let's make it a little bit easier. These 5 quick questions are your first step to get us on the right track.</p>
      <ProgressBar progress={questionnaire.progress} />
      <QuestionRenderer question={questionnaire.currentQuestion} onAnswer={questionnaire.answerCurrentQuestion} />
      <button className="back-button" onClick={questionnaire.backToPreviousQuestion}>Back</button>
    </div>
  )
}

export default QuestionnairePage