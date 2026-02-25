import { useEffect, useState } from "react";

type NextButtonProps = {
  canSubmit: boolean;
  onSubmit: () => void;
  buttonLabel?: string;
  cantSubmitMessage?: string;
  className?: string;
};

function NextButton({
  canSubmit,
  onSubmit,
  buttonLabel = "Next",
  cantSubmitMessage = "Please select an answer",
  className = "",
}: NextButtonProps) {
  const [showMessage, setShowMessage] = useState(false);

  // show the message if the question is unanswered and the user tries to click the button
  useEffect(() => {
    if (canSubmit) {
      setShowMessage(false);
    }
  }, [canSubmit]);

  // hide the message after 3 seconds
  useEffect(() => {
    if (!showMessage) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => window.clearTimeout(timeoutId);
  }, [showMessage]);

  const handleClick = () => {
    if (!canSubmit) {
      setShowMessage(true);
      return;
    }

    setShowMessage(false);
    onSubmit();
  };

  return (
    <div className={`submit-container ${className}`.trim()}>
      <span
        className="submit-tooltip-wrap"
        title={!canSubmit ? cantSubmitMessage : undefined}
      >
        <button
          type="button"
          className={"answer-button " + (!canSubmit ? "is-disabled" : "")}
          onClick={handleClick}
          aria-disabled={!canSubmit}
        >
          {buttonLabel}
        </button>
      </span>
      {showMessage && cantSubmitMessage.trim() !== "" ? <p className="submit-hint">{cantSubmitMessage}</p> : null}
    </div>
  );
}

export default NextButton;
