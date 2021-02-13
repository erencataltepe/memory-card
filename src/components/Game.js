import PlayerCard from "./PlayerCard";
import "./Game.css";

export default function Game(props) {
  const playerCards = props.players.map((player) => (
    <PlayerCard
      player={player}
      key={player.id}
      handleChangePlayer={props.handleChangePlayer}
    />
  ));

  return <div className="players">{playerCards}</div>;
}
