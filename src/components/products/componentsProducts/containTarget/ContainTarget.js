import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ContainTarget.css";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import LoaderGames from "../../../loader/LoaderGames";
import CardTarget from "../cardTarget/CardTarget";

const ContainTarget = () => {
  const [tarjetas, setTarjetas] = useState([]);

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const response = await axios.get(
          "https://data-cobragames.onrender.com/tarjetas"
        );
        setTarjetas(response.data.tarjetas);
        console.log("Juegos:", response.data.tarjetas);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    }

    obtenerDatos();
  }, []);
  if (!tarjetas.length) {
    return <LoaderGames />;
  }

  return (
    <div className="containTarget">
      <Link to={`/tarjetas`}>
        <button className="viewAllTarget">Ver todo</button>
      </Link>
      <h1 className="nameCard">Tarjetas</h1>
      <Swiper
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1200,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        id="mySwiperTarget"
        breakpoints={{
          // Definir la cantidad de slides por vista en diferentes tamaños de pantalla
          425: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {tarjetas.slice(0, 10).map((tarjeta, index) => (
          <SwiperSlide className="sliderTarget">
            <Link to={`/tarjeta/${encodeURIComponent(tarjeta.nombre)}`}>
              <CardTarget
                key={index}
                imagen={tarjeta.imagen}
                nombre={tarjeta.nombre}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContainTarget;
