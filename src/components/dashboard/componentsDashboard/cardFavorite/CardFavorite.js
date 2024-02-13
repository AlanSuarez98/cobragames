import "./CardFavorite.css";
const CardFavorite = ({ image, title }) => {
  return (
    <div className="cardFavorite">
      <img src={image} alt="" />
      <div className="textFavorite">
        <h1>{title}</h1>
      </div>
      <div className="boxOption">
        <select>
          <option>----</option>
          <option>Eliminar</option>
        </select>
        <button>Confirmar</button>
      </div>
    </div>
  );
};

export default CardFavorite;
