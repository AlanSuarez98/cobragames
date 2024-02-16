import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import "./ProductConsole.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import CardGames from "../products/componentsProducts/cardGames/CardGames";
import { Link } from "react-router-dom";
import { useImageContext } from "../contexts/imageContext";
import Loader from "../loader/Loader";

const ProductConsole = () => {
  const { platform } = useParams();
  const [juegos, setJuegos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 20;
  const { setImagenProp } = useImageContext();

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

  if (!juegos) {
    return <Loader />;
  }

  const imagenProp = `imagen_${platform.toLowerCase()}`;

  // Calcular el índice del último juego en la página actual
  const indexOfLastGame = currentPage * gamesPerPage;
  // Calcular el índice del primer juego en la página actual
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  // Obtener los juegos para la página actual
  const juegosToShow = juegos.slice(indexOfFirstGame, indexOfLastGame);

  // Cambiar a la siguiente página
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Cambiar a la página anterior
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <Nav />
      <div className="product-console">
        <h1>{platform}</h1>
        <div className="boxGames">
          {juegosToShow.map((juego, index) => (
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
          ))}
        </div>
        <div className="boxPagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Anterior
          </button>
          <p>{currentPage}</p>
          <button onClick={nextPage}>Siguiente</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductConsole;
