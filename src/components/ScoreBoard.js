export default function ScoreBoard(props) {
  return (
    <div>
      <div>
        <h2>Current Score: {props.currentScore}</h2>
      </div>
      <div>
        <h2>Best Score: {props.bestScore}</h2>
      </div>
    </div>
  );
}
