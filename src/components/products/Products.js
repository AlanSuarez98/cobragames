import Nav from "../nav/Nav";
import "./Products.css";
import ContainCards from "./componentsProducts/containCards/ContainCards";
import ContainTarget from "./componentsProducts/containTarget/ContainTarget";
import Footer from "../footer/Footer";

const Products = () => {
  return (
    <div className="products">
      <Nav className="nav" />

      <div className="containGames">
        <ContainCards plataforma={"PS5"} imagenProp="imagen_ps5" />
        <ContainTarget />
        <ContainCards
          plataforma={"PS4"}
          imagenProp="imagen_ps4"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
