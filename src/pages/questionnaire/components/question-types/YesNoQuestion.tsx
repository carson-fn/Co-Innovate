// React
import { useState, useEffect } from 'react'

// Context
import { useQuestionnaireContext } from '../../context/QuestionnaireContext'

// Types
// import the type under a different name so it doesnt conflict with the component name
import { YesNoQuestion as YNQType } from '../../types'


function YesNoQuestion({ question }: { question: YNQType }) {

  const { answerCurrentQuestion: onAnswer, answers } = useQuestionnaireContext()
  const [highlightedOption, setHighlightedOption] = useState<string | null>(null);

  // update answers on question change
      useEffect(() => {
          // reset highlighted option
          setHighlightedOption(null)
  
          // if question has an answer, highlight it on return
          if (answers[question.id]) {
              setHighlightedOption(answers[question.id])
          }
  
      }, [question.id, answers])

  return (
    <div>
      <h3 className="question-text">{question.text}</h3>
      <div className="answer-group">
        <button className={"answer-button " + (highlightedOption === "yes" ? "highlighted" : "")} onClick={() => onAnswer("yes")}>Yes</button>
        <button className={"answer-button " + (highlightedOption === "no" ? "highlighted" : "")} onClick={() => onAnswer("no")}>No</button>
      </div>
    </div>
  )
}

export default YesNoQuestion
