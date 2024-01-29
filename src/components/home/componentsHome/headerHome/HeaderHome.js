import "./HeaderHome.css";
import wave from "../../../../assets/waveSuperior.svg";
import logo from "../../../../assets/Logo.png";
import { useNavigate } from "react-router";

const HeaderHome = () => {
  const navigate = useNavigate();
  const handleProducts = () => {
    navigate("/catálogo");
  };
  return (
    <div>
      <div className="headerHome">
        <img src={wave} alt="" className="waveSuperior" />
        <div className="titles">
          <h1>Cobra Games</h1>
          <h3>Tienda Online</h3>
          <p>
            ¡Tu tienda online favorita donde puedes encontrar tus juegos
            favoritos!
          </p>
          <button className="btnCatalogo" onClick={handleProducts}>
            VER CATÁLOGO
          </button>
        </div>
        <div className="logoHeader">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
