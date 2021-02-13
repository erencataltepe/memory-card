import "./PlayerCard.css";

export default function PlayerCard(props) {
  return (
    <img
      src={props.player.image}
      alt={props.player.name}
      data-key={props.player.id}
      data-status={props.player.isSelected}
      className="player-card"
      onClick={props.handleChangePlayer}
    />
  );
}
