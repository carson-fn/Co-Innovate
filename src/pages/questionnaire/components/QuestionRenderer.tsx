import { Question } from "../types";
import MultipleChoiceQuestion from "./question-types/MultipleChoiceQuestion";
import YesNoQuestion from "./question-types/YesNoQuestion";

function QuestionRenderer({ question, onAnswer } : { question: Question, onAnswer: (answer: string) => void }) {
  switch (question.type) {
    case "yes_no":
      return <YesNoQuestion question={question} onAnswer={onAnswer} />
    case "multiple_choice":
      return <MultipleChoiceQuestion question={question} onAnswer={onAnswer} />
    default:
      return (<div>Question type not supported: {question.type}</div>);
  }
}
export default QuestionRenderer;