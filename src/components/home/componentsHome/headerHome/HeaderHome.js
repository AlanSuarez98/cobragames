import "./HeaderHome.css";
/*import wave from "../../../../assets/waveSuperior.svg";
import logo from "../../../../assets/Logo.png";
import { useNavigate } from "react-router";*/
import SliderHeader from "../sliderHeader/SliderHeader";

const HeaderHome = () => {
  /*const navigate = useNavigate();
  const handleProducts = () => {
    navigate("/catálogo");
  };*/
  return (
    <div className="headerHome">
      <SliderHeader />
    </div>
  );
};

export default HeaderHome;
