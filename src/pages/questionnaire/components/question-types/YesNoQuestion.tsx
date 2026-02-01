// Context
import { useQuestionnaireContext } from '../../context/QuestionnaireContext'

// Types
// import the type under a different name so it doesnt conflict with the component name
import { YesNoQuestion as YNQType, OnAnswerFunction } from '../../types'


function YesNoQuestion({ question }: { question: YNQType }) {

  const { answerCurrentQuestion: onAnswer } = useQuestionnaireContext()

  return (
    <div>
      <h3 className="question-text">{question.text}</h3>
      <div className="answer-group">
        <button className="answer-button" onClick={() => onAnswer("yes")}>Yes</button>
        <button className="answer-button" onClick={() => onAnswer("no")}>No</button>
      </div>
    </div>
  )
}

export default YesNoQuestion