import "./Advertising.css";
import imagen from "../../../../assets/IgPublicidad.webp";

const Advertising = () => {
  const click = () => {
    window.open("https://www.instagram.com/cobragames.ok", "_blank");
  };
  return (
    <div className="advertising">
      <img src={imagen} alt="Anuncio de Cobra Games" onClick={click} />
    </div>
  );
};

export default Advertising;
