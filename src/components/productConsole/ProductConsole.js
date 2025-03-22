import React, { useEffect, useState, useMemo, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import ErrorBoundary from "../../ErrorBoundary"; // Asegúrate de que la ruta sea correcta
import Loader from "../loader/Loader"; // Componente de carga
import icon from "../../assets/iconPlay.png";
import "./ProductConsole.css";

// Componentes cargados dinámicamente
const Nav = lazy(() => import("../nav/Nav"));
const CardGames = lazy(() =>
  import("../products/componentsProducts/cardGames/CardGames")
);
const FooterHome = lazy(() =>
  import("../home/componentsHome/footerHome/FooterHome")
);
const NextPagination = lazy(() =>
  import("../subComponents/btnPagination/nextPagination/NextPagination")
);
const PastPagination = lazy(() =>
  import("../subComponents/btnPagination/pastPagination/PastPagination")
);

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

  useEffect(() => {
    setJuegos([]); // Reiniciar la lista de juegos
    setCurrentPage(1); // Reiniciar la página actual
    setSearchResults([]); // Reiniciar los resultados de búsqueda
    setSearchTerm(""); // Reiniciar el término de búsqueda
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

  const backGround = useMemo(() => {
    return platform.toLowerCase() === "ps4"
      ? "linear-gradient(135deg, #003087, #0050a8)"
      : platform.toLowerCase() === "ps5"
      ? "white"
      : "defaultColor";
  }, [platform]);

  const colorCss = useMemo(() => {
    return platform.toLowerCase() === "ps4"
      ? "white"
      : platform.toLowerCase() === "ps5"
      ? "black"
      : "defaultColor";
  }, [platform]);

  const invert = useMemo(() => {
    return platform.toLowerCase() === "ps4"
      ? "invert(1)"
      : platform.toLowerCase() === "ps5"
      ? "invert(0)"
      : "defaultColor";
  }, [platform]);

  const shadow = useMemo(() => {
    return platform.toLowerCase() === "ps4"
      ? "0px 0px 6px white"
      : platform.toLowerCase() === "ps5"
      ? "0px 0px 10px #0050a8"
      : "none";
  }, [platform]);

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

  const shouldShowPagination = juegosToShow.length > gamesPerPage;
  const lowPlatform = platform.toLowerCase();

  return (
    <>
      <Helmet>
        <title>Cobra Games | Juegos {platform}</title>
        <meta
          name="description"
          content={`Explora nuestra colección de juegos para ${platform} en Cobra Games.`}
        />
        <meta
          name="keywords"
          content={`${platform}, videojuegos, videojuegos digitales, Cobra Games, juegos, PS4, PS5`}
        />
      </Helmet>

      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <header>
            <Nav
              onSearch={handleSearch}
              showSearchInput={true}
              showTitle={false}
            />
          </header>
          <main className="product-console">
            <h1
              style={{
                background: backGround,
                color: colorCss,
                boxShadow: shadow,
              }}
            >
              {platform}
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
                    setCurrentPage={handlePageChange}
                  />
                )}
                {!isLastPage && (
                  <NextPagination
                    setCurrentPage={handlePageChange}
                    currentPage={currentPage}
                  />
                )}
              </div>
            )}
          </main>
          <footer>
            <FooterHome />
          </footer>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default ProductConsole;
