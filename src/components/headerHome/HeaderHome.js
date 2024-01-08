import "./HeaderHome.css";
import logo from "../../assets/Logo.png";
import BurbujaOpt from "../burbujaOpt/BurbujaOpt";

const HeaderHome = () => {
  return (
    <div>
      <div className="containHeader">
        <div className="titleheader">
          <h1>Cobra Games</h1>
          <h2>¡Tu tienda online de videojuegos favorita!</h2>
        </div>
        <div className="imgHeader">
          <img src={logo} alt="" />
          <BurbujaOpt />
        </div>
        <div className="image">
          <div className="blackWind"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
