import Nav from "../nav/Nav";
import "./ProductConsole.css"; // Asegúrate de que este archivo CSS esté correctamente vinculado
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import CardGames from "../products/componentsProducts/cardGames/CardGames";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";
import FooterHome from "../home/componentsHome/footerHome/FooterHome";
import NextPagination from "../subComponents/btnPagination/nextPagination/NextPagination";
import PastPagination from "../subComponents/btnPagination/pastPagination/PastPagination";
import icon from "../../assets/iconPlay.png";

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
          `https://data-cobragames.vercel.app/data/platform?platform=${platform}`
        );
        setJuegos(response.data.juegos);
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    }

    obtenerDatos();
  }, [platform]);

  const formatearPrecio = (precio) => {
    const numero = Number(precio);
    if (isNaN(numero)) {
      return precio;
    }
    return numero
      .toLocaleString("es-ES", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      .replace(/\./g, ".");
  };

  useEffect(() => {
    document.title = `Cobra Games | Juegos ${platform}`;
  }, [platform]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const results = juegos.filter((juego) => {
      if (juego.nombre) {
        return juego.nombre.toLowerCase().includes(term.toLowerCase());
      }
      return false;
    });
    setSearchResults(results);
    setCurrentPage(1); // Resetear a la primera página al realizar una búsqueda
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage); // Cambiar la página
    window.scrollTo({ top: 0, behavior: "smooth" }); // Desplazar al inicio de la página
  };

  if (!juegos.length) {
    return <Loader />;
  }

  const juegosToShow = searchResults.length > 0 ? searchResults : juegos;
  const startIndex = (currentPage - 1) * gamesPerPage;
  const selectedGames = juegosToShow.slice(
    startIndex,
    startIndex + gamesPerPage
  );

  const totalPages = Math.ceil(juegosToShow.length / gamesPerPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const backGround =
    platform.toLowerCase() === "ps4"
      ? "linear-gradient(135deg, #003087, #0050a8)"
      : platform.toLowerCase() === "ps5"
      ? "white"
      : "defaultColor";

  const colorCss =
    platform.toLowerCase() === "ps4"
      ? "white"
      : platform.toLowerCase() === "ps5"
      ? "black"
      : "defaultColor";

  const invert =
    platform.toLowerCase() === "ps4"
      ? "invert(1)"
      : platform.toLowerCase() === "ps5"
      ? "invert(0)"
      : "defaultColor";

  const shadow =
    platform.toLowerCase() === "ps4"
      ? "0px 0px 6px white"
      : platform.toLowerCase() === "ps5"
      ? "0px 0px 10px #0050a8"
      : "none";

  const shouldShowPagination = juegosToShow.length > gamesPerPage;
  const lowPlatform = platform.toLowerCase();

  return (
    <>
      <Nav onSearch={handleSearch} showSearchInput={true} showTitle={false} />
      <div className="product-console">
        <h1
          style={{ background: backGround, color: colorCss, boxShadow: shadow }}
        >
          Juegos {platform}
          <img src={icon} alt="iconPlay" style={{ filter: invert }} />
        </h1>
        <div className="boxGames">
          {searchTerm && searchResults.length === 0 ? (
            <p className="messageNotFound">
              No se encontraron juegos con el nombre "{searchTerm}"
            </p>
          ) : (
            selectedGames.map((juego, index) => (
              <div
                key={index}
                className={juego.stock === "No" ? "gameOutOfStock" : ""}
              >
                {juego.stock === "No" ? (
                  <div className="gameOutOfStock">
                    <CardGames
                      imagen={juego.imagen}
                      nombre={juego.nombre}
                      precio={formatearPrecio(juego.primario)}
                      stock={juego.stock}
                    />
                  </div>
                ) : (
                  <Link
                    to={`/tienda/juego/${encodeURIComponent(
                      lowPlatform
                    )}/${encodeURIComponent(juego.nombre)}`}
                  >
                    <CardGames
                      imagen={juego.imagen}
                      nombre={juego.nombre}
                      precio={formatearPrecio(juego.primario)}
                    />
                  </Link>
                )}
              </div>
            ))
          )}
        </div>
        {shouldShowPagination && (
          <div className="boxPagination">
            {!isFirstPage && (
              <PastPagination
                currentPage={currentPage}
                setCurrentPage={handlePageChange} // Usar handlePageChange
              />
            )}
            {!isLastPage && (
              <NextPagination
                setCurrentPage={handlePageChange} // Usar handlePageChange
                currentPage={currentPage}
              />
            )}
          </div>
        )}
      </div>
      <FooterHome />
    </>
  );
};

export default ProductConsole;
