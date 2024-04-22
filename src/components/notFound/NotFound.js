import "./NotFound.css";
import logo from "../../assets/ErrorLogo.png";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  useEffect(() => {
    document.title = `Cobra Games | 404 Not Found`;
  }, []);
  return (
    <>
      <div className="notFound">
        <img src={logo} alt="" />
        <div className="textNotFound">
          <h1>¡UPS!</h1>
          <h2>Pagina no encontrada</h2>
          <button onClick={handleHome}>Volver al inicio</button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
