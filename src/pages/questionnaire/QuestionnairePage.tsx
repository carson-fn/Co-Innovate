
// Styles
import "./styles.css"

// Components
import Content from './components/Content';

// Context
import { QuestionnaireProvider } from './context/QuestionnaireContext';

function QuestionnairePage() {

  const startingPointKey = "intake";

  return (
    <QuestionnaireProvider startingPointKey={startingPointKey}>
      <Content/>
    </QuestionnaireProvider>
  )
}

export default QuestionnairePage
