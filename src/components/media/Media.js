import FooterHome from "../home/componentsHome/footerHome/FooterHome";
import Nav from "../nav/Nav";
import "./Media.css";

const Media = () => {
  return (
    <>
      <Nav showSearchInput={false} showTitle={true} />
      <div className="container-media">
        <h2>Bienvenido a nuestra sección de videos y tutoriales</h2>
        <p>
          Aquí encontrarás guías paso a paso para instalar juegos en cuenta{" "}
          primaria y secundaria en PS4 y PS5, <br />
          además de soluciones a problemas comunes y consejos para sacarle el
          máximo provecho a tu consola.
          <br /> Explora nuestros tutoriales, sigue cada paso y disfruta de tus
          juegos sin complicaciones.
          <br /> No olvides seguirnos para más contenido y estar siempre al día
          con las mejores guías.
        </p>
        <div className="media">
          <div className="cardVideo">
            <h3>Tutorial cuenta primaria PS4</h3>
            <iframe
              width="789"
              height="444"
              src="https://www.youtube.com/embed/vGHvnpzsPGo"
              title="Como instalar juego de PS4 cuenta primaria | Cobra Games"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="cardVideo">
            <h3>Tutorial cuenta secundaria PS4</h3>
            <iframe
              width="789"
              height="444"
              src="https://www.youtube.com/embed/vUObPivR9FM"
              title="Como instalar juego PS4 cuenta secundaria | Cobra Games"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="cardVideo">
            <h3>Tutorial cuenta primaria PS5</h3>
            <iframe
              width="789"
              height="444"
              src="https://www.youtube.com/embed/OB6D5XywqPs"
              title="Como instalar juego PS5 cuenta primaria | Cobra Games"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="cardVideo">
            <h3>Tutorial cuenta secundaria PS5</h3>
            <iframe
              width="789"
              height="444"
              src="https://www.youtube.com/embed/E9o_-rA0Rag"
              title="Como instalar juego PS5 cuenta secundaria | Cobra Games"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <FooterHome />
    </>
  );
};

export default Media;
