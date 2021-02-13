import PlayerCard from "./PlayerCard";

export default function Game(props) {
  const playerCards = props.players.map((player) => (
    <PlayerCard
      player={player}
      key={player.id}
      handleChangePlayer={props.handleChangePlayer}
    />
  ));

  return <div>{playerCards}</div>;
}
