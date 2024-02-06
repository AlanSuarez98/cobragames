import CardConsole from "../cardConsole/CardConsole";
import CardGames from "../cardGames/CardGames";
import "./ContainCards.css";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

const ContainCards = () => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    async function obtenerDatos() {
      const respuesta = await fetch("http://127.0.0.1:5000/data");
      const datos = await respuesta.json();
      setJuegos(datos.juegos);
    }

    obtenerDatos();
  }, []);
  return (
    <div className="containCards">
      <div className="leftContain">
        <CardConsole />
      </div>
      <div className="rightContain">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {juegos.slice(0, 10).map((juego) => (
            <SwiperSlide key={juego.id}>
              <CardGames imagen={juego.imagen_ps4} nombre={juego.nombre} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ContainCards;
