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
import LoaderGames from "../../../loader/LoaderGames";

const ContainCards = ({ plataforma, imagenProp }) => {
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

  if (!juegos.length) {
    return <LoaderGames />;
  }

  return (
    <div className="containCards">
      <Link to={`/consola/${platform}`}>
        <button className="viewAll">Ver todo</button>
      </Link>
      <h1 className="namePlatform">{plataforma}</h1>
      <Swiper
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: false,
        }}
        modules={[FreeMode, Pagination]}
        id="containGames"
        breakpoints={{
          // Definir la cantidad de slides por vista en diferentes tamaños de pantalla
          425: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {juegos.slice(0, 10).map((juego, index) => (
          <SwiperSlide className="swiperProducts">
            <Link
              to={`/juego/${encodeURIComponent(juego.nombre)}`}
              onClick={() => {
                setImagenProp(juego[imagenProp]);
                localStorage.setItem("imagenProp", juego[imagenProp]);
              }}
            >
              <CardGames
                key={index}
                imagen={juego[imagenProp]}
                nombre={juego.nombre}
                platform={juego.platform}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContainCards;
