import { Link } from "react-router-dom";
import "./CardGames.css";
import { useImageContext } from "../../../contexts/imageContext";

const CardGames = ({ imagen, nombre }) => {
  const { setImagenProp } = useImageContext();
  return (
    <div className="card">
      <div className="card-img">
        <img src={imagen} alt={nombre} />
      </div>
      <div className="card-info">
        <p className="text-title">{nombre}</p>
      </div>
      <div className="card-footer">
        <Link
          to={`/juego/${encodeURIComponent(nombre)}`}
          onClick={() => {
            setImagenProp(imagen);
            localStorage.setItem("imagenProp", imagen);
          }}
        >
          <button className="shopNow">
            <span className="hover-underline-animation"> Comprar</span>
            <svg
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardGames;
