import CardGames from "../cardGames/CardGames";
import "./ContainCards.css"; // Asegúrate de que este archivo CSS esté correctamente vinculado
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import LoaderGames from "../../../loader/LoaderGames";

const ContainCards = ({ plataforma }) => {
  const [juegos, setJuegos] = useState([]);
  const [platform] = useState(plataforma);

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const response = await axios.get(
          `https://data-cobragames.vercel.app/data/platform?platform=${platform}`
        );
        setJuegos(response.data.juegos);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    }
    obtenerDatos();
  }, [platform]);

  const formatearPrecio = (precio) => {
    const numero = Number(precio);
    if (isNaN(numero)) {
      return precio;
    }
    return numero
      .toLocaleString("es-ES", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      .replace(/\./g, ".");
  };

  if (!juegos.length) {
    return <LoaderGames />;
  }

  const lowPlatform = platform.toLowerCase();

  return (
    <div className="containCards">
      <Link to={`/tienda/consola/${platform}`}>
        <button className="viewAll">Ver todo</button>
      </Link>
      <h1 className="namePlatform">{plataforma}</h1>
      <Swiper
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        id="containGames"
        breakpoints={{
          425: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {juegos.slice(0, 10).map((juego, index) => (
          <SwiperSlide className="swiperProducts" key={index}>
            {juego.stock === "No" ? (
              <div className="gameOutOfStock">
                <CardGames
                  imagen={juego.imagen}
                  nombre={juego.nombre}
                  platform={juego.platform}
                  precio={formatearPrecio(juego.primario)}
                  stock={juego.stock}
                />
              </div>
            ) : (
              <Link
                to={`/tienda/juego/${encodeURIComponent(
                  lowPlatform
                )}/${encodeURIComponent(juego.nombre)}`}
              >
                <CardGames
                  imagen={juego.imagen}
                  nombre={juego.nombre}
                  platform={juego.platform}
                  precio={formatearPrecio(juego.primario)}
                />
              </Link>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContainCards;
