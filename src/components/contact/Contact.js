import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Footer from "../footer/Footer";
import Nav from "../nav/Nav";
import "./Contact.css";
import CardContact from "./componentContact/cardContact/CardContact";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const openWhatsapp = () => {
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=543416697243&text&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, "_blank");
  };

  const sendEmail = () => {
    const emailAddress = "cobragames.ok@gmail.com";
    const mailtoUrl = `mailto:${emailAddress}`;
    window.location.href = mailtoUrl;
  };
  return (
    <>
      <Nav />
      <div className="cajaContact">
        <h1>Canales de Contacto</h1>
        <h2>Estamos para ayudarte con cualquier consulta</h2>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
