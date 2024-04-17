import "./PopUp.css";
import logo from "../../assets/Logo.png";
import Icon from "../icon/Icon";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const PopUp = ({ onClose, text1, text2 }) => {
  const navigate = useNavigate();

  const handleSupport = () => {
    navigate("/contacto");
  };
  return (
    <>
      <div className="boxPopUp">
        <div className="popUp">
          <div className="titlePopUp">
            <img src={logo} alt="" />
            <h1>¡AVISO!</h1>
            <button className="button" onClick={onClose}>
              <span className="X"></span>
              <span className="Y"></span>
              <div className="close">Close</div>
            </button>
          </div>
          <div className="message">
            <p>
              ¡Hola! <br /> <br /> {text1}
              <br /> <br /> {text2}{" "}
              <span onClick={handleSupport}>
                <Icon icon={faHeadset} />
              </span>{" "}
            </p>
          </div>
          <div className="ending">
            <h2>¡Gracias por confiar en nosotros!</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
