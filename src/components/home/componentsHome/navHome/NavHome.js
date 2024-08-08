import { useNavigate } from "react-router";
import "./NavHome.css";

const NavHome = () => {
  const navigate = useNavigate();

  const handleGamesPS4 = () => {
    navigate("/consola/PS4");
  };
  const handleGamesPS5 = () => {
    navigate("/consola/PS5");
  };
  /*
  const handleTarget = () => {
    navigate("/tarjetas");
  };
  */
  const handleShop = () => {
    navigate("/catálogo");
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
      <button onClick={handleContact}>
        <span>{">  "}</span> Contacto
      </button>
    </div>
  );
};

export default NavHome;
