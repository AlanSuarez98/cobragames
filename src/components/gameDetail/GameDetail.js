import { useParams } from "react-router";
import Nav from "../nav/Nav";
import "./GameDetail.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../loader/Loader";
import FooterHome from "../home/componentsHome/footerHome/FooterHome";

const GameDetail = () => {
  const { nombre } = useParams();
  const [game, setGame] = useState(null);
  const [imagenProp, setImagenProp] = useState(null);

  const openWhatsapp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=543416697243&text&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const response = await axios.get(
          "https://data-cobragames.vercel.app/data"
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
    document.title = `Cobra Games | ${nombre}`;
    obtenerDatos();
  }, [nombre]);

  if (!game) {
    return <Loader />;
  }
  return (
    <>
      <Nav showTitle={true} />
      <div className="gameDetail">
        <div className="infoGame">
          <div className="imgGame">
            <img src={imagenProp} alt="" />
          </div>
          <div className="dataGame">
            <h1>{game.nombre}</h1>
            <p>{game.descripcion}</p>
            <button class="cta" onClick={openWhatsapp}>
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
      <FooterHome />
    </>
  );
};

export default GameDetail;
