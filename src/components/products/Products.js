import Advertising from "../home/componentsHome/advertising/Advertising";
import FooterHome from "../home/componentsHome/footerHome/FooterHome";
import Nav from "../nav/Nav";
import "./Products.css";
import ContainCards from "./componentsProducts/containCards/ContainCards";
import ContainTarget from "./componentsProducts/containTarget/ContainTarget";
import { useEffect } from "react";

const Products = () => {
  useEffect(() => {
    document.title = "Cobra Games | Tienda";
  }, []);

  return (
    <div className="products">
      <Nav className="nav" showSearchInput={false} showTitle={true} />
      <Advertising />
      <div className="containGames">
        <ContainCards plataforma={"PS5"} />
        <ContainTarget />
        <ContainCards plataforma={"PS4"} />
      </div>
      <FooterHome />
    </div>
  );
};

export default Products;
