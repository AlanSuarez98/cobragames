import axios from "axios";
import Nav from "../nav/Nav";
import "./ProductTarget.css";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import CardTarget from "../products/componentsProducts/cardTarget/CardTarget";
import { useImageContext } from "../contexts/imageContext";
import { Link } from "react-router-dom";
import FooterHome from "../home/componentsHome/footerHome/FooterHome";
import PastPagination from "../subComponents/btnPagination/pastPagination/PastPagination";
import NextPagination from "../subComponents/btnPagination/nextPagination/NextPagination";
import icon from "../../assets/iconCard.png";

const ProductTarget = () => {
  const [tarjetas, setTarjetas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [searchTerm, setSearchTerm] = useState(""); // Agregar searchTerm aquí
  const [searchResults, setSearchResults] = useState([]);
  const gamesPerPage = 20;
  const { setImagenProp } = useImageContext();

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

  const handleSearch = (term) => {
    setSearchTerm(term); // Actualizar el término de búsqueda
    if (term === "") {
      setSearchResults(tarjetas); // Mostrar todas las tarjetas si el término de búsqueda está vacío
    } else {
      const filteredResults = tarjetas.filter((tarjeta) =>
        tarjeta.nombre.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredResults);
      setCurrentPage(1); // Restablecer a la primera página después de la búsqueda
    }
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

  return (
    <>
      <Nav showTitle={false} onSearch={handleSearch} showSearchInput={true} />
      <div className="product-console">
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
          {tarjetasToShow.map((tarjeta, index) => (
            <Link
              to={`/tienda/tarjeta/${encodeURIComponent(tarjeta.nombre)}`}
              onClick={() => {
                setImagenProp(tarjeta.imagen);
                localStorage.setItem("imagenProp", tarjeta.imagen);
              }}
              key={index}
            >
              <CardTarget imagen={tarjeta.imagen} nombre={tarjeta.nombre} />
            </Link>
          ))}
        </div>
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
      </div>
      <FooterHome />
    </>
  );
};

export default ProductTarget;
