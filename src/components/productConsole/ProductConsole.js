import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import "./ProductConsole.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import CardGames from "../products/componentsProducts/cardGames/CardGames";

const ProductConsole = () => {
  const { platform } = useParams();
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const response = await axios.get(
          "https://data-cobragames.onrender.com/data"
        );
        setJuegos(response.data.juegos);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    }

    obtenerDatos();
  }, []);
  const imagenProp = `imagen_${platform}`;
  return (
    <>
      <Nav />
      <div className="product-console">
        <h1>{platform}</h1>
        <div className="boxGames">
          {juegos.map((juego, index) => (
            <CardGames
              key={index}
              imagen={juego[imagenProp]}
              nombre={juego.nombre}
            />
          ))}
        </div>
        <div className="boxPagination">
          <button>Anterior</button>
          <p>3</p>
          <button>Siguiente</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductConsole;
