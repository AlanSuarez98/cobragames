import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ContainTarget.css";
import CardGames from "../cardGames/CardGames";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

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

  return (
    <div className="containTarget">
      <button className="viewAllTarget">Ver todo</button>
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
            <CardGames
              key={index}
              imagen={tarjeta.imagen}
              nombre={tarjeta.nombre}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ContainTarget;
