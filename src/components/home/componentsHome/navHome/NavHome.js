import { useNavigate } from "react-router";
import "./NavHome.css";

const NavHome = () => {
  const navigate = useNavigate();

  const handleGamesPS4 = () => {
    navigate("/tienda/consola/PS4");
  };
  const handleGamesPS5 = () => {
    navigate("/tienda/consola/PS5");
  };
  const handleCard = () => {
    navigate("/tienda/tarjetas");
  };
  const handleShop = () => {
    navigate("/tienda");
  };
  const handleContact = () => {
    navigate("/contacto");
  };
  return (
    <div className="navHome">
      <button onClick={handleShop}>Tienda</button>
      <button onClick={handleGamesPS5}>
        <span>{">  "}</span> Juegos PS5
      </button>
      <button onClick={handleGamesPS4}>
        <span>{">  "}</span> Juegos PS4
      </button>
      <button onClick={handleCard}>
        <span>{">  "}</span> Tarjetas
      </button>
      <button onClick={handleContact}>
        <span>{">  "}</span> Contacto
      </button>
    </div>
  );
};

export default NavHome;
