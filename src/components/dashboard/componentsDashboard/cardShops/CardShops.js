import "./CardShops.css";

const CardShops = ({ image, title, cantidad }) => {
  return (
    <div className="cardShops">
      <img src={image} alt="" />
      <div className="textShop">
        <h1>{title}</h1>
        <p>
          Cantidad: <span>{cantidad}</span>
        </p>
      </div>
      <div className="boxOption">
        <select>
          <option>----</option>
          <option>Reembolsar</option>
          <option>Eliminar</option>
        </select>
        <button>Confirmar</button>
      </div>
    </div>
  );
};

export default CardShops;
