// React
import { useState } from 'react'

// Styles
import "./styles.css"

// Components
import Content from './components/Content';

// Context
import { QuestionnaireProvider } from './context/QuestionnaireContext';

// Types
import { StartingPointKey } from './types'





function QuestionnairePage() {

  const [startingPointKey, setStartingPointKey] = useState<StartingPointKey>("portfolio");

  return (
    <QuestionnaireProvider startingPointKey={startingPointKey}>
      <Content/>
    </QuestionnaireProvider>
  )
}

export default QuestionnairePage