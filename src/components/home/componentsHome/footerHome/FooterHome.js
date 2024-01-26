import "./FooterHome.css";
import Icon from "../../../icon/Icon";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const FooterHome = () => {
  const año = new Date().getFullYear();
  return (
    <div className="footerHome">
      <div className="footerSuperior">
        <div className="footerLeft">
          <h1>NOSOTROS</h1>
          <p>
            Tienda de tarjetas de saldo y juegos digitales para PS4 y PS5 con
            excelente servicio al cliente. Precios bajos y gran variedad de
            productos disponibles.
          </p>
          <p>
            Escribinos en Instagram o por E-mail{" "}
            <span>
              {" "}
              <Icon icon={faInstagram} css={"iconFooter"} />
            </span>
            <span>
              {" "}
              <Icon icon={faEnvelope} css={"iconFooter"} />
            </span>
          </p>
        </div>
        <div className="footerRigth">
          <h1>PROMOCIONES</h1>
          <p>
            ¿Querés ser el primero en enterarte de nuestros descuentos y
            promociones? Completa tu email para recibir mas info.
          </p>
          <div className="emailFooter">
            <input type="email" placeholder="example@example.com" />
            <button>SUSCRIBIRME</button>
          </div>
        </div>
      </div>
      <div className="footerInferior">
        Todos los derechos reservados. <span>{año}</span> ©
      </div>
    </div>
  );
};

export default FooterHome;
