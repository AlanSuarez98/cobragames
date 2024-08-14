import Nav from "../nav/Nav";
import "./ProductConsole.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import CardGames from "../products/componentsProducts/cardGames/CardGames";
import Loader from "../loader/Loader";
import { Link } from "react-router-dom";
import { useImageContext } from "../contexts/imageContext";
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
  const { setImagenProp } = useImageContext();

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
    setCurrentPage(1);
  };

  if (!juegos.length) {
    return <Loader />;
  }

  const imagenProp = `imagen_${platform.toLowerCase()}`;

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

  const shouldShowPagination =
    juegosToShow.length > gamesPerPage && searchResults.length > 0;

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
              <Link
                to={`/tienda/juego/${encodeURIComponent(juego.nombre)}`}
                onClick={() => {
                  setImagenProp(juego[imagenProp]);
                  localStorage.setItem("imagenProp", juego[imagenProp]);
                }}
                key={index}
              >
                <CardGames imagen={juego[imagenProp]} nombre={juego.nombre} />
              </Link>
            ))
          )}
        </div>
        {shouldShowPagination && (
          <div className="boxPagination">
            {!isFirstPage && (
              <PastPagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
            {!isLastPage && (
              <NextPagination
                setCurrentPage={setCurrentPage}
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
