// Context
import { useQuestionnaireContext } from "../context/QuestionnaireContext";

// Components
import QuestionnaireComplete from "./FinishedCard";
import ProgressBar from "./ProgressBar";
import QuestionRenderer from "./QuestionRenderer";


function QuestionnaireContent() {
  const questionnaire = useQuestionnaireContext();

  if (questionnaire.isComplete) {
    return <QuestionnaireComplete answers={questionnaire.answers} />;
  }

  return (
    <div className="questionnaire-page">
      <div className="questionnaire-page">
        <h1 className="question-text">Get Started</h1>
        <p>Sometimes getting started is the hardest part, so let's make it a little bit easier. These 5 quick questions are your first step to get us on the right track.</p>
        <ProgressBar />
        <QuestionRenderer />
        <button className="back-button" onClick={questionnaire.backToPreviousQuestion}>Back</button>
      </div>
    </div>
  );
}
export default QuestionnaireContent;