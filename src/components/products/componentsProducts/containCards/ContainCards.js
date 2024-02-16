import CardConsole from "../cardConsole/CardConsole";
import CardGames from "../cardGames/CardGames";
import "./ContainCards.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { useImageContext } from "../../../contexts/imageContext";

const ContainCards = ({ plataforma, consola, imagenProp }) => {
  const [juegos, setJuegos] = useState([]);
  const [platform] = useState(plataforma);
  const { setImagenProp } = useImageContext();

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const response = await axios.get(
          "https://data-cobragames.onrender.com/data"
        );
        setJuegos(response.data.juegos);
        console.log("Juegos:", response.data.juegos);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    }

    obtenerDatos();
  }, []);
  return (
    <div className="containCards">
      <button className="viewAll">
        <Link to={`/consola/${platform}`}>Ver todo</Link>
      </button>
      <div className="leftContain">
        <CardConsole consola={consola} />
      </div>
      <div className="rightContain">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {juegos.slice(0, 10).map((juego, index) => (
            <SwiperSlide>
              <Link
                to={`/game/${encodeURIComponent(juego.nombre)}`}
                onClick={() => {
                  setImagenProp(juego[imagenProp]);
                  localStorage.setItem("imagenProp", juego[imagenProp]);
                }}
              >
                <CardGames
                  key={index}
                  imagen={juego[imagenProp]}
                  nombre={juego.nombre}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ContainCards;
