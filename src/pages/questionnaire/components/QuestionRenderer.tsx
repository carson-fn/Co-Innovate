import { Question } from "../types";
import YesNoQuestion from "./question-types/YesNoQuestion";

function QuestionRenderer({ question } : { question: Question }) {
  switch (question.type) {
    case "yes_no":
      return <YesNoQuestion question={question}/>
    default:
      return null;
  }
}
export default QuestionRenderer;