import "./ScoreBoard.css";

export default function ScoreBoard(props) {
  return (
    <div className="score-board">
      <div className="score-info">
        <h2>Current Score: {props.currentScore}</h2>
      </div>
      <div className="score-info">
        <h2>Best Score: {props.bestScore}</h2>
      </div>
    </div>
  );
}
