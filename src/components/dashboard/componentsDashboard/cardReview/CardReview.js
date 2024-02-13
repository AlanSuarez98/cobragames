import "./CardReview.css";

const CardReview = ({ image, title }) => {
  return (
    <div className="cardReview">
      <img src={image} alt="" />
      <div className="textReview">
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

export default CardReview;
