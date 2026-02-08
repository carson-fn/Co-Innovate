// React
import React, { useState } from 'react'

// Context
import { useQuestionnaireContext } from '../context/QuestionnaireContext';

// Components
import { sendQuestionnaireAnswers } from '../../email/EmailManager';

type SubmissionStatus = 'idle' | 'sending' | 'success' | 'error';

function FinishedCard() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const buttonTextMap: Record<SubmissionStatus, string> = {
    idle: 'Submit',
    sending: 'Submitting...',
    success: 'Submitted!',
    error: 'Error Sending',
  };

  const { getAnswersAsFormattedString } = useQuestionnaireContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // send answers by email
    setSubmissionStatus('sending');
    sendQuestionnaireAnswers(name, email, getAnswersAsFormattedString())
      .then(() => {
        setSubmitted(true);
        setSubmissionStatus('success');
      })
      .catch((error) => {
        console.error("Error submitting questionnaire answers:", error);
        setSubmissionStatus('error');
      })
      .finally(() => setTimeout(() => setSubmissionStatus('idle'), 3000));
  }

  return (
    <div className="complete-page">
      <div className="complete-card">
        <h1 className="complete-title">Thanks for taking the questionnaire!</h1>
        {submitted ?
          (
            <p className="complete-text">
              Your responses have been recorded. We will get back to you with the next steps.
            </p>
          ) : (
            <div>
              <p className="complete-text">
                Please enter your name and email so we can get back to you with the next steps. We are looking forward to working with you!
              </p>
              <form className="answer-group" onSubmit={handleSubmit}>
                <input 
                  type="text" 
                  className="text-input" 
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required={true} 
                />
                <input 
                  type="email" 
                  className="text-input" 
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required={true} 
                />

                <button className="answer-button">
                  {buttonTextMap[submissionStatus]}
                </button>
              </form>
            </div>
          )
        }
      </div>
    </div>
  );
}


export default FinishedCard