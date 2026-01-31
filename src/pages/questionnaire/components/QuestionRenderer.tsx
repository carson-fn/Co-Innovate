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

  const { currentQuestion: question, answerCurrentQuestion: onAnswer }: { currentQuestion: Question, answerCurrentQuestion: (answer: string) => void } = useQuestionnaireContext();
  
  const getQuestionComponent = () => {

    if (!question) {
      // prevent errors when question has not yet loaded
      return;
    }

    switch (question.type) {
      case "yes_no":
        return <YesNoQuestion question={question} onAnswer={onAnswer} />
      case "multiple_choice":
        return <MultipleChoiceQuestion question={question} onAnswer={onAnswer} />
      case "text":
        return <TextQuestion question={question} onAnswer={onAnswer} />
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