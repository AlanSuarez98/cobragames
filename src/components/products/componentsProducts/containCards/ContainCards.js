import CardConsole from "../cardConsole/CardConsole";
import CardGames from "../cardGames/CardGames";
import "./ContainCards.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const ContainCards = ({ console, imagenProp }) => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const response = await axios.get(
          "https://data-cobragames.onrender.com/data"
        );
        setJuegos(response.data.juegos);
        console.log("Juegos:", response.data.juegos);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    }

    obtenerDatos();
  }, []);

  return (
    <div className="containCards">
      <div className="leftContain">
        <CardConsole console={console} />
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
              <CardGames
                key={index}
                imagen={juego[imagenProp]}
                nombre={juego.nombre}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ContainCards;
