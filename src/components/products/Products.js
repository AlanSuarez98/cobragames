import Nav from "../nav/Nav";
import "./Products.css";
import anuncio from "../../assets/AnuncioCobraGames.jpg";
import ContainCards from "./componentsProducts/containCards/ContainCards";
import consolePS5 from "../../assets/ps5.png";
import consolePS4 from "../../assets/ps4.png";

const Products = () => {
  return (
    <div className="products">
      <Nav className="nav" />
      <div className="adsContain">
        <img src={anuncio} alt="" />
      </div>
      <div className="containGames">
        <ContainCards console={consolePS5} imagenProp="imagen_ps5" />
        <ContainCards console={consolePS4} imagenProp="imagen_ps4" />
      </div>
    </div>
  );
};

export default Products;
