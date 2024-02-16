import "./CardGames.css";

const CardGames = ({ imagen, nombre }) => {
  return (
    <div className="cardGames">
      <img src={imagen} alt="" />
      <p>{nombre}</p>
    </div>
  );
};

export default CardGames;
