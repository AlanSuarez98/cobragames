import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ContainTarget.css";
import CardGames from "../cardGames/CardGames";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Loader from "../../../loader/Loader";

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
  if (!tarjetas) {
    return <Loader />;
  }
  return (
    <div className="containTarget">
      <button className="viewAllTarget">
        <Link to={`/tarjetas`}>Ver todo</Link>
      </button>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiperTarget"
      >
        {tarjetas.slice(0, 10).map((tarjeta, index) => (
          <SwiperSlide>
            <Link to={`/tarjetas/${encodeURIComponent(tarjeta.nombre)}`}>
              <CardGames
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
