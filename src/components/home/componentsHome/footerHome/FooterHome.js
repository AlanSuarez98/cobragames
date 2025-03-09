import "./FooterHome.css";
import Icon from "../../../icon/Icon";
import iconApp from "../../../../assets/iconApp.png";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const FooterHome = () => {
  const año = new Date().getFullYear();
  const openInstagram = () => {
    const instagramUrl = `https://www.instagram.com/cobragames.ok/`;
    window.open(instagramUrl, "_blank");
  };

  const descargarAPK = async () => {
    try {
      // Hacer una solicitud al backend para obtener el archivo .apk
      const response = await fetch(
        "https://data-cobragames.vercel.app/download-apk"
      );
      if (!response.ok) {
        throw new Error("Error al descargar el archivo");
      }

      // Convertir la respuesta a un blob
      const blob = await response.blob();

      // Crear un enlace temporal para la descarga
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "app.apk"); // Nombre del archivo
      document.body.appendChild(link);

      // Simular el clic en el enlace para iniciar la descarga
      link.click();

      // Limpiar y eliminar el enlace temporal
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al descargar el archivo:", error);
    }
  };

  const sendEmail = () => {
    const emailAddress = "cobragames.ok@gmail.com";
    const mailtoUrl = `mailto:${emailAddress}`;
    window.location.href = mailtoUrl;
  };
  return (
    <div className="footerHome">
      <div className="footerSuperior">
        <div className="container-foot-data">
          <h1>NOSOTROS</h1>
          <p>
            Tienda de tarjetas de saldo y juegos digitales para PS4 y PS5 con
            excelente servicio al cliente. <br /> Precios bajos y gran variedad
            de productos disponibles.
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
        <div className="container-foot-app">
          <h2>Descargar App</h2>
          <button onClick={descargarAPK}>
            <img src={iconApp} alt="iconApp" />
          </button>
        </div>
      </div>
      <div className="footerInferior">
        Todos los derechos reservados. <span>{año}</span> ©
      </div>
    </div>
  );
};

export default FooterHome;
