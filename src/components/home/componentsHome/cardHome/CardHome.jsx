import { Swiper, SwiperSlide } from "swiper/react";
import "./CardHome.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import LoaderGames from "../../../loader/LoaderGames";

export default function CardHome({ imagenProp }) {
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
        console.log("Error al obtener los datos:", error);
      }
    }

    obtenerDatos();
  }, []);
  if (!juegos.length) {
    return <LoaderGames />;
  }

  return (
    <div className="cardMainHome">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        id="swiperCardHome"
      >
        {juegos.slice(0, 10).map((juego, index) => (
          <SwiperSlide className="sliderCardHome" key={index}>
            <img src={juego[imagenProp]} alt="" className="imgCardHome" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
