import axios from "axios";
import Nav from "../nav/Nav";
import "./ProductTarget.css";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import CardTarget from "../products/componentsProducts/cardTarget/CardTarget";
import { useImageContext } from "../contexts/imageContext";
import { Link } from "react-router-dom";
import FooterHome from "../home/componentsHome/footerHome/FooterHome";

const ProductTarget = () => {
  const [tarjetas, setTarjetas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 20;
  const { setImagenProp } = useImageContext();

  useEffect(() => {
    document.title = `Cobra Games | Tarjetas`;
  }, []);

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const response = await axios.get(
          "https://data-cobragames.vercel.app/tarjetas"
        );
        setTarjetas(response.data.tarjetas);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    }

    obtenerDatos();
  }, []);

  if (!tarjetas.length) {
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

  // Verificar si estás en la primera página
  const isFirstPage = currentPage === 1;
  // Verificar si estás en la última página
  const isLastPage = indexOfLastGame > tarjetas.length;
  return (
    <>
      <Nav showTitle={true} />
      <div className="product-console">
        <h1>Tarjetas</h1>
        <div className="boxGames">
          {tarjetasToShow.map((tarjeta, index) => (
            <Link
              to={`/tienda/tarjeta/${encodeURIComponent(tarjeta.nombre)}`}
              onClick={() => {
                setImagenProp(tarjeta.imagen);
                localStorage.setItem("imagenProp", tarjeta.imagen);
              }}
            >
              <CardTarget
                key={index}
                imagen={tarjeta.imagen}
                nombre={tarjeta.nombre}
              />
            </Link>
          ))}
        </div>
        <div className="boxPagination">
          <button onClick={prevPage} disabled={isFirstPage}>
            Anterior
          </button>
          <p>{currentPage}</p>
          <button onClick={nextPage} disabled={isLastPage}>
            Siguiente
          </button>
        </div>
      </div>
      <FooterHome />
    </>
  );
};

export default ProductTarget;
