import Nav from "../nav/Nav";
import "./Products.css";
import anuncio from "../../assets/AnuncioCobraGames.jpg";
import ContainCards from "./componentsProducts/containCards/ContainCards";
import consolePS5 from "../../assets/ps5.png";
import consolePS4 from "../../assets/ps4.png";
import ContainTarget from "./componentsProducts/containTarget/ContainTarget";
import Footer from "../footer/Footer";

const Products = () => {
  return (
    <div className="products">
      <Nav className="nav" />
      <div className="adsContain">
        <img src={anuncio} alt="" />
      </div>
      <div className="containGames">
        <ContainCards consola={consolePS5} imagenProp="imagen_ps5" />
        <ContainTarget />
        <ContainCards consola={consolePS4} imagenProp="imagen_ps4" />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
