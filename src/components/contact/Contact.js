import React, { useEffect, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import ErrorBoundary from "../../ErrorBoundary"; // Asegúrate de que la ruta sea correcta
import Loading from "../loader/LoaderGames"; // Componente de carga
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

// Componentes cargados dinámicamente
const Nav = lazy(() => import("../nav/Nav"));
const CardContact = lazy(() =>
  import("./componentContact/cardContact/CardContact")
);
const FooterHome = lazy(() =>
  import("../home/componentsHome/footerHome/FooterHome")
);

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
      <Helmet>
        <title>Cobra Games - Contacto</title>
        <meta
          name="description"
          content="Contáctanos a través de WhatsApp, Email o Instagram. Estamos para ayudarte."
        />
        <meta
          name="keywords"
          content="contacto, Cobra Games, WhatsApp, Email, Instagram, videojuegos, consolas"
        />
      </Helmet>

      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <header>
            <Nav showSearchInput={false} showTitle={true} />
          </header>
          <main className="cajaContact">
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
              <CardContact
                icon={faInstagram}
                nombre={"Instagram"}
                descripcion={"Enterate de todas las novedades"}
                button={"Seguir"}
                handleButton={openInstagram}
              />
            </div>
          </main>
          <footer>
            <FooterHome />
          </footer>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Contact;
