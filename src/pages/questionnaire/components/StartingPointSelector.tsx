// Types
import { StartingPoint, StartingPointKey, StartingPointsMap } from '../types'

// Data
import startingPointsImport from '../data/startingPoints.json';

const startingPoints = startingPointsImport as StartingPointsMap

function StartingPointSelector({ onSelect }: { onSelect: (key: StartingPointKey) => void }) {
  return (
    <div className="question-container">
      <h2 >Co-Innovate Questionnaire</h2>
      <p>(TEMPORARY) The following questions will help us better understand your innovation needs. To begin, which of these options best describe your current situation?</p>
      <div className="answer-group">
        {Object.values(startingPoints).map((option: StartingPoint) => (
          <button className="answer-button" key={option.id} onClick={() => onSelect(option.id)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  )
}

export default StartingPointSelector