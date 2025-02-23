import "./InMaintenance.css";
import logo from "../../assets/Logo.png";

const InMaintenance = () => {
  return (
    <div className="maintance">
      <div className="maintance__container">
        <img src={logo} alt="Logo" />
        <p>
          <h2>¡Estamos en mantenimiento!</h2>
          Estamos trabajando para mejorar la experiencia de nuestros usuarios.{" "}
          <br />
          Mientras tanto, síguenos en Instagram para actualizaciones:
          <a href="https://www.instagram.com/cobragames.ok/">@cobragames.ok</a>
        </p>
      </div>
      <div className="maintance__data">
        <h2>Estaremos de vuelta el</h2>
        <div className="container__date">
          <h2>10</h2>
          <h2>de</h2>
          <h2>Marzo</h2>
          <h2>2025</h2>
        </div>
        <div className="container__time">
          <h2>00</h2>
          <h2 className="andTime">:</h2>
          <h2>00</h2>
          <h2>hs</h2>
        </div>
      </div>
    </div>
  );
};

export default InMaintenance;
