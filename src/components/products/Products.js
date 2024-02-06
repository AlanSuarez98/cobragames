import Nav from "../nav/Nav";
import "./Products.css";
import anuncio from "../../assets/AnuncioCobraGames.jpg";
import ContainCards from "./componentsProducts/containCards/ContainCards";

const Products = () => {
  return (
    <div className="products">
      <Nav className="nav" />
      <div className="adsContain">
        <img src={anuncio} alt="" />
      </div>
      <div className="containGames">
        <ContainCards />
      </div>
    </div>
  );
};

export default Products;
