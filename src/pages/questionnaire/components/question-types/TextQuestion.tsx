// React
import { useEffect, useState } from 'react'

// Context
import { useQuestionnaireContext } from '../../context/QuestionnaireContext'

// Types
import { TextQuestion as TQType } from '../../types'


function TextQuestion({ question }: { question: TQType }) {

    const { answerCurrentQuestion: onAnswer, answers } = useQuestionnaireContext()
    const [answer, setAnswer] = useState("");

    // update text box on question change
    useEffect(() => {

        // if this question was already answered, show the previous answer on return
        if (answers[question.id]) {
            setAnswer(answers[question.id])
        } else {
            // otherwise reset the text box
            setAnswer("")
        }

    }, [question.id])

    return (
        <div>
            <h3 className="question-text">{question.text}</h3>
            <form onSubmit={()=>onAnswer(answer)}>
            <input
                type="textbox"
                className="text-input"
                required={true}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
            ></input>
            <button className="answer-button" type="submit">Next</button>
            </form>

        </div>
    )
}

export default TextQuestion