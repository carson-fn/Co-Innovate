// Context
import { useQuestionnaireContext } from '../context/QuestionnaireContext';

function ProgressBar() {
  
  const { progress } = useQuestionnaireContext();

  return (
    <div className="progress-container">
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${Math.min(progress * 100, 100)}%` }}
        />
      </div>
    </div>
  );
}

export default ProgressBar