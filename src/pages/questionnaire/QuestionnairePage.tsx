import { useState } from 'react'
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
import QuestionnaireComplete from './components/FinishedCard';
import { QuestionnaireProvider } from './context/QuestionnaireContext';
import Content from './components/Content';


function QuestionnairePage() {

  const [startingPointKey, setStartingPointKey] = useState<StartingPointKey>("portfolio");
  const questionnaire = useQuestionnaire(startingPointKey);

  return (
    <QuestionnaireProvider startingPointKey={startingPointKey}>
      <Content/>
    </QuestionnaireProvider>
  )
}

export default QuestionnairePage