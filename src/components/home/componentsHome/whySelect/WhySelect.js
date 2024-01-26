import "./WhySelect.css";
import Icon from "../../../icon/Icon";
import {
  faBagShopping,
  faClock,
  faEnvelope,
  faHeart,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import cliente from "../../../../assets/AtCliente.jpg";

const WhySelect = () => {
  return (
    <div className="selectHome">
      <div className="textSelect">
        <h1>¿Por qué elegirnos?</h1>
        <h3>
          {" "}
          <Icon icon={faBagShopping} css={"iconText"} /> SITIO DE COMPRAS SEGURO
        </h3>
        <h3>
          {" "}
          <Icon icon={faStar} css={"iconText"} /> ATENCIÓN PERSONALIZADA
        </h3>
        <h3>
          {" "}
          <Icon icon={faClock} css={"iconText"} /> AHORRAS TIEMPO Y DINERO
        </h3>
        <h3>
          {" "}
          <Icon icon={faPhone} css={"iconText"} /> RECIBÍS SOPORTE 24 HS
        </h3>
        <h3>
          {" "}
          <Icon icon={faEnvelope} css={"iconText"} /> ENTREGAS INMEDIATAS
        </h3>
        <h3>
          {" "}
          <Icon icon={faHeart} css={"iconText"} /> GRANDES OFERTAS
        </h3>
      </div>
      <div className="imgCliente">
        <img src={cliente} alt="" />
      </div>
    </div>
  );
};

export default WhySelect;
