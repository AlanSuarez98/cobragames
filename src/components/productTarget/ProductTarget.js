import axios from "axios";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import "./ProductTarget.css";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import CardTarget from "../products/componentsProducts/cardTarget/CardTarget";

const ProductTarget = () => {
  const [tarjetas, setTarjetas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 20;

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const response = await axios.get(
          "https://data-cobragames.onrender.com/tarjetas"
        );
        setTarjetas(response.data.tarjetas);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    }

    obtenerDatos();
  }, []);
  if (!tarjetas) {
    return <Loader />;
  }
  // Calcular el índice del último juego en la página actual
  const indexOfLastGame = currentPage * gamesPerPage;
  // Calcular el índice del primer juego en la página actual
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  // Obtener los juegos para la página actual
  const tarjetasToShow = tarjetas.slice(indexOfFirstGame, indexOfLastGame);

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
        <h1>Tarjetas</h1>
        <div className="boxGames">
          {tarjetasToShow.map((tarjeta, index) => (
            <CardTarget
              key={index}
              imagen={tarjeta.imagen}
              nombre={tarjeta.nombre}
            />
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

export default ProductTarget;
