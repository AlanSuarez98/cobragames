import "./HeaderHome.css";
import banner from "../../../../assets/HeaderFinal.jpg";
import bannerMovil from "../../../../assets/HeaderFinal2.jpg";
import { useEffect, useState } from "react";
/*import wave from "../../../../assets/waveSuperior.svg";
import logo from "../../../../assets/Logo.png";
import { useNavigate } from "react-router";
import SliderHeader from "../sliderHeader/SliderHeader";*/

const HeaderHome = () => {
  /*const navigate = useNavigate();
  const handleProducts = () => {
    navigate("/catálogo");
  };*/

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="headerHome">
      {windowWidth < 760 ? (
        <img src={bannerMovil} alt="Imagen 1" />
      ) : (
        <img src={banner} alt="Imagen 2" />
      )}
    </div>
  );
};

export default HeaderHome;
