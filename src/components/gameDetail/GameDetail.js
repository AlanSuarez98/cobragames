import { useParams } from "react-router";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import "./GameDetail.css";
import { useEffect, useState } from "react";
import axios from "axios";

const GameDetail = () => {
  const { nombre } = useParams();
  const [game, setGame] = useState(null);
  const [imagenProp, setImagenProp] = useState(null);

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const response = await axios.get(
          "https://data-cobragames.onrender.com/data"
        );
        const juego = response.data.juegos.find(
          (juego) => juego.nombre === nombre
        );
        setGame(juego);
        const storedImagenProp = localStorage.getItem("imagenProp");
        if (storedImagenProp) {
          setImagenProp(storedImagenProp);
        }
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    }

    obtenerDatos();
  }, [nombre]);

  if (!game) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Nav />
      <div className="gameDetail">
        <div className="infoGame">
          <div className="imgGame">
            <img src={imagenProp} alt="" />
          </div>
          <div className="dataGame">
            <h1>{game.nombre}</h1>
            <p>{game.descripcion}</p>
            <button class="cta">
              <span class="hover-underline-animation"> Comprar </span>
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
          </div>
        </div>
        <div className="boxTrailer">
          <div
            className="videoGame"
            dangerouslySetInnerHTML={{ __html: game.video }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GameDetail;
