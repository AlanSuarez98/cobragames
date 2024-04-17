import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import "./ProductConsole.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import CardGames from "../products/componentsProducts/cardGames/CardGames";
import LoaderGames from "../loader/LoaderGames";

const ProductConsole = () => {
  const { platform } = useParams();
  const [juegos, setJuegos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 20;
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
  useEffect(() => {
    document.title = `Cobra Games | Juegos ${platform}`;
  }, [platform]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const results = juegos.filter((juego) =>
      juego.nombre.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
    setCurrentPage(1); // Restablecer la página actual al realizar una búsqueda
  };

  if (!juegos.length) {
    return <LoaderGames />;
  }

  const imagenProp = `imagen_${platform.toLowerCase()}`;

  // Determinar qué lista de juegos mostrar basada en si hay resultados de búsqueda o no
  const juegosToShow =
    searchResults.length > 0
      ? searchResults
      : juegos.slice(
          (currentPage - 1) * gamesPerPage,
          currentPage * gamesPerPage
        );

  const totalPages = Math.ceil(juegos.length / gamesPerPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <>
      <Nav onSearch={handleSearch} showSearchInput={true} showTitle={false} />
      <div className="product-console">
        <h1>{platform}</h1>
        <div className="boxGames">
          {juegosToShow.length > 0 ? (
            juegosToShow.map((juego, index) => (
              <CardGames
                key={index}
                imagen={juego[imagenProp]}
                nombre={juego.nombre}
              />
            ))
          ) : (
            <p>No se encontraron juegos con el nombre "{searchTerm}"</p>
          )}
        </div>
        <div className="boxPagination">
          {!searchResults.length && !isFirstPage && (
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              Anterior
            </button>
          )}
          <p>{currentPage}</p>
          {!searchResults.length && !isLastPage && (
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Siguiente
            </button>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductConsole;
