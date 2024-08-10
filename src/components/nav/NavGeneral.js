import "./NavGeneral.css";
import logo from "../../assets/Logo.png";
import Icon from "../icon/Icon";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const NavGeneral = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verificar si el usuario está logueado al cargar la página
    const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
    if (loggedInUserEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleHome = () => {
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleMyAccount = () => {
    navigate("/dashboard");
  };
  const handleGamesPS4 = () => {
    navigate("/tienda/consola/PS4");
  };
  const handleGamesPS5 = () => {
    navigate("/tienda/consola/PS5");
  };
  const handleTarget = () => {
    navigate("/tienda/tarjetas");
  };
  const handleShop = () => {
    navigate("/tienda");
  };
  const handleContact = () => {
    navigate("/contacto");
  };
  return (
    <div className="navGeneral">
      <div className="navTop">
        <div className="image" onClick={handleHome}>
          <img src={logo} alt="" />
          <h1>Cobra Games</h1>
        </div>
        <div className="btnNav">
          <button>
            Carrito <Icon icon={faCartShopping} css={"iconChair"} />
          </button>
          {isLoggedIn ? (
            <button onClick={handleMyAccount}>Mi Cuenta</button>
          ) : (
            <button onClick={handleLogin}>Iniciar Sesión</button>
          )}
        </div>
      </div>
      <div className="navBottom">
        <button onClick={handleShop}>Tienda</button>
        <button onClick={handleGamesPS5}>
          <span>{">  "}</span> Juegos PS5
        </button>
        <button onClick={handleGamesPS4}>
          <span>{">  "}</span> Juegos PS4
        </button>
        <button onClick={handleTarget}>
          <span>{">  "}</span> Tarjetas
        </button>
        <button onClick={handleContact}>
          <span>{">  "}</span> Contacto
        </button>
      </div>
    </div>
  );
};

export default NavGeneral;
