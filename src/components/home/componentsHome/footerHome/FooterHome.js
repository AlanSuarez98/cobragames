import "./FooterHome.css";
import Icon from "../../../icon/Icon";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const FooterHome = () => {
  const año = new Date().getFullYear();

  const openInstagram = () => {
    const instagramUrl = `https://www.instagram.com/cobragames.ok/`;
    window.open(instagramUrl, "_blank");
  };

  const sendEmail = () => {
    const emailAddress = "cobragames.ok@gmail.com";
    const mailtoUrl = `mailto:${emailAddress}`;
    window.location.href = mailtoUrl;
  };
  return (
    <div className="footerHome">
      <div className="footerSuperior">
        <h1>NOSOTROS</h1>
        <p>
          Tienda de tarjetas de saldo y juegos digitales para PS4 y PS5 con
          excelente servicio al cliente. Precios bajos y gran variedad de
          productos disponibles.
        </p>
        <p>
          Escribinos en Instagram o por E-mail{" "}
          <span onClick={openInstagram}>
            {" "}
            <Icon icon={faInstagram} css={"iconFooter"} />
          </span>
          <span onClick={sendEmail}>
            {" "}
            <Icon icon={faEnvelope} css={"iconFooter"} />
          </span>
        </p>
      </div>
      <div className="footerInferior">
        Todos los derechos reservados. <span>{año}</span> ©
      </div>
    </div>
  );
};

export default FooterHome;
