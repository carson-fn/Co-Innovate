// React
import { useEffect, useState } from 'react'

// Context
import { useQuestionnaireContext } from '../../context/QuestionnaireContext'

// Types
import { TextQuestion as TQType } from '../../types'
import NextButton from './NextButton';


function TextQuestion({ question }: { question: TQType }) {

    const { answerCurrentQuestion: onAnswer, answers } = useQuestionnaireContext()
    const [answer, setAnswer] = useState("");

    const hasAnswer = answer.trim() !== "";

    const submitAnswer = () => {
        if (hasAnswer) {
            onAnswer(answer);
        }
    }

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
            <form onSubmit={(e) => {
                e.preventDefault();
                submitAnswer();
            }}>
            <input
                type="textbox"
                className="text-input"
                // required={true}
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
            ></input>
            
            {/* <button className="answer-button" type="submit" disabled={!hasAnswer}>Next</button> */}
            </form>
            <NextButton canSubmit={hasAnswer} onSubmit={submitAnswer} cantSubmitMessage="Please enter an answer" />
        </div>
    )
}

export default TextQuestion
