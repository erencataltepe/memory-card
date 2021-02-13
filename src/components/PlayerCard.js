export default function PlayerCard(props) {
  const myStyle = {
    width: "120px",
    border: "1px solid black",
    margin: "10px",
  };

  return (
    <img
      src={props.player.image}
      alt={props.player.name}
      data-key={props.player.id}
      data-status={props.player.isSelected}
      style={myStyle}
      onClick={props.handleChangePlayer}
    />
  );
}
