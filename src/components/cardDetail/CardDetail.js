import { useEffect, useState } from "react";
import "./CardDetail.css";
import { useParams } from "react-router";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import axios from "axios";
import Loader from "../loader/Loader";

const CardDetail = () => {
  const { nombre } = useParams();
  const [tarjeta, setTarjeta] = useState(null);

  const openWhatsapp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=543416697243&text&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
  };

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const response = await axios.get(
          "https://data-cobragames.onrender.com/tarjetas"
        );
        const tarjeta = response.data.tarjetas.find(
          (tarjeta) => tarjeta.nombre === nombre
        );
        setTarjeta(tarjeta);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    }

    obtenerDatos();
  }, [nombre]);

  if (!tarjeta) {
    return <Loader />;
  }
  return (
    <>
      <Nav />
      <div className="cardDetail">
        <div className="infoCard">
          <div className="imgCard">
            <img src={tarjeta.imagen} alt="" />
          </div>
          <div className="dataCard">
            <h1>{tarjeta.nombre}</h1>
            <p>{tarjeta.descripcion}</p>
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
      </div>
      <Footer />
    </>
  );
};

export default CardDetail;
