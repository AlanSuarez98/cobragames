import Nav from "../nav/Nav";
import "./Products.css";
import CardConsole from "./componentsProducts/cardConsole/CardConsole";

const Products = () => {
  return (
    <div className="products">
      <Nav className="nav" />
      <CardConsole className="CardConsole" />
    </div>
  );
};

export default Products;
