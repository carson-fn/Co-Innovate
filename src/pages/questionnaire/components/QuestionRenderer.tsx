// Context
import { useQuestionnaireContext } from "../context/QuestionnaireContext";

// Styles
import "../styles.css"

// Types
import { Question } from "../types";

// Components
import MultipleChoiceQuestion from "./question-types/MultipleChoiceQuestion";
import TextQuestion from "./question-types/TextQuestion";
import YesNoQuestion from "./question-types/YesNoQuestion";

function QuestionRenderer() {

  const { currentQuestion }: { currentQuestion: Question } = useQuestionnaireContext();

  const getQuestionComponent = () => {

    if (!currentQuestion) {
      // prevent errors when question has not yet loaded
      return;
    }

    switch (currentQuestion.type) {
      case "yes_no":
        return <YesNoQuestion question={currentQuestion} />
      case "multiple_choice":
        return <MultipleChoiceQuestion question={currentQuestion} />
      case "text":
        return <TextQuestion question={currentQuestion} />
      default:
        return <></>;
      // return (<div>Question type not supported: {question.type}</div>);
    }
  }

  return (
    <div className="question-container">
      {getQuestionComponent()}
    </div>
  )

}
export default QuestionRenderer;