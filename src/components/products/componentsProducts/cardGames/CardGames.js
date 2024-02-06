import "./CardGames.css";

const CardGames = ({ imagen, nombre }) => {
  return (
    <div className="cardGames">
      <img src={imagen} alt="" />
      <h1>{nombre}</h1>
    </div>
  );
};

export default CardGames;
