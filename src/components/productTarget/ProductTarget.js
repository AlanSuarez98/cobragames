import React, { useEffect, useState, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import axios from "axios";
import ErrorBoundary from "../../ErrorBoundary"; // Asegúrate de que la ruta sea correcta
import Loader from "../loader/Loader"; // Componente de carga
import icon from "../../assets/iconCard.png";
import "./ProductTarget.css";

// Componentes cargados dinámicamente
const Nav = lazy(() => import("../nav/Nav"));
const CardTarget = lazy(() =>
  import("../products/componentsProducts/cardTarget/CardTarget")
);
const FooterHome = lazy(() =>
  import("../home/componentsHome/footerHome/FooterHome")
);
const PastPagination = lazy(() =>
  import("../subComponents/btnPagination/pastPagination/PastPagination")
);
const NextPagination = lazy(() =>
  import("../subComponents/btnPagination/nextPagination/NextPagination")
);

const ProductTarget = () => {
  const [tarjetas, setTarjetas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const gamesPerPage = 20;

  useEffect(() => {
    document.title = "Cobra Games | Tarjetas";
  }, []);

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const response = await axios.get(
          "https://data-cobragames.vercel.app/tarjetas"
        );
        setTarjetas(response.data.tarjetas);
        setSearchResults(response.data.tarjetas); // Inicialmente mostrar todas las tarjetas
      } catch (error) {
        console.log("Error al obtener los datos:", error);
      }
    }

    obtenerDatos();
  }, []);

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

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term === "") {
      setSearchResults(tarjetas);
    } else {
      const filteredResults = tarjetas.filter((tarjeta) =>
        tarjeta.nombre.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredResults);
      setCurrentPage(1); // Restablecer a la primera página después de la búsqueda
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage); // Cambiar la página
    window.scrollTo({ top: 0, behavior: "smooth" }); // Desplazar al inicio de la página
  };

  if (!tarjetas.length) {
    return <Loader />;
  }

  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const tarjetasToShow = searchResults.slice(indexOfFirstGame, indexOfLastGame);

  const totalPages = Math.ceil(searchResults.length / gamesPerPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const heightCard = window.innerWidth < 450 ? "150%" : "100px";
  const invertCard = "invert(1)";

  const shouldShowPagination = searchResults.length > gamesPerPage;

  return (
    <>
      <Helmet>
        <title>Cobra Games | Tarjetas</title>
        <meta
          name="description"
          content="Explora nuestra colección de tarjetas de regalo en Cobra Games."
        />
        <meta
          name="keywords"
          content="tarjetas, Cobra Games, videojuegos, consolas, PS4, PS5"
        />
      </Helmet>

      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <header>
            <Nav
              showTitle={false}
              onSearch={handleSearch}
              showSearchInput={true}
            />
          </header>
          <main className="product-console">
            <h1
              style={{
                backgroundColor: "goldenrod",
                boxShadow: "0px 0px 6px white",
              }}
            >
              Tarjetas
              <img
                src={icon}
                alt="Icon Card"
                style={{ height: heightCard, filter: invertCard }}
              />
            </h1>
            <div className="boxGames">
              {searchTerm && searchResults.length === 0 ? (
                <p className="messageNotFound">
                  No se encontraron tarjetas con el nombre "{searchTerm}"
                </p>
              ) : (
                tarjetasToShow.map((tarjeta, index) => (
                  <div
                    key={index}
                    className={tarjeta.stock === "No" ? "gameOutOfStock" : ""}
                  >
                    {tarjeta.stock === "No" ? (
                      <div className="gameOutOfStock">
                        <CardTarget
                          imagen={tarjeta.imagen}
                          nombre={tarjeta.nombre}
                          precio={formatearPrecio(tarjeta.precio)}
                          stock={tarjeta.stock}
                        />
                      </div>
                    ) : (
                      <Link
                        to={`/tienda/tarjeta/${encodeURIComponent(
                          tarjeta.nombre
                        )}`}
                      >
                        <CardTarget
                          imagen={tarjeta.imagen}
                          nombre={tarjeta.nombre}
                          precio={formatearPrecio(tarjeta.precio)}
                        />
                      </Link>
                    )}
                  </div>
                ))
              )}
            </div>
            {!searchTerm || searchResults.length > 0
              ? shouldShowPagination && (
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
                )
              : null}
          </main>
          <footer>
            <FooterHome />
          </footer>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default ProductTarget;
