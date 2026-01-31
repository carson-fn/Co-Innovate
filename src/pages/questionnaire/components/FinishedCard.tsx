import React, { useState } from 'react'

function FinishedCard({answers}: {answers: Record<string, string>}) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO send email with answers to consultant team
    
    console.log("Questionnaire answers submitted:", answers);
    setSubmitted(true);
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
                <input type="text" className="text-input" placeholder="Your Name" required={true}/>
                <input type="email" className="text-input" placeholder="Your Email" required={true}/>
              
                <button className="answer-button">Submit</button>
              </form>
            </div>
          )
        }
      </div>
    </div>
  );
}


export default FinishedCard