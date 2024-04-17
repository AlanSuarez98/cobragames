import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import "./Contact.css";
import CardContact from "./componentContact/cardContact/CardContact";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Contact = () => {
  const openWhatsapp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=543416697243&text&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
  };

  const openInstagram = () => {
    const instagramUrl = `https://www.instagram.com/cobragames.ok/`;
    window.open(instagramUrl, "_blank");
  };

  const sendEmail = () => {
    const emailAddress = "cobragames.ok@gmail.com";
    const mailtoUrl = `mailto:${emailAddress}`;
    window.location.href = mailtoUrl;
  };

  useEffect(() => {
    document.title = `Cobra Games | Contacto`;
  }, []);
  return (
    <>
      <Nav />
      <div className="cajaContact">
        <h1>Canales de Contacto</h1>
        <h2>Estamos para ayudarte con cualquier consulta</h2>
        <>
          <div className="boxContact">
            <CardContact
              icon={faWhatsapp}
              nombre={"WhatsApp"}
              descripcion={"Brindamos atención personalizada"}
              button={"CHATEAR"}
              handleButton={openWhatsapp}
            />
            <CardContact
              icon={faEnvelope}
              nombre={"Email"}
              descripcion={"Te ayudamos con la instalación"}
              button={"CONTACTAR"}
              handleButton={sendEmail}
            />
            <CardContact
              icon={faInstagram}
              nombre={"Instagram"}
              descripcion={"Enterate de todas las novedades"}
              button={"Seguir"}
              handleButton={openInstagram}
            />
          </div>
        </>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
