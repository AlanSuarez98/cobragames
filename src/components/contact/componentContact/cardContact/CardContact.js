import React from "react";
import Icon from "../../../icon/Icon";
import "./CardContact.css";

const CardContact = ({ icon, nombre, descripcion, button, handleButton }) => {
  return (
    <div className="cardContact">
      <div className="cardBoxContact">
        <div className="card_load">
          <Icon icon={icon} css={"iconContact"} />
        </div>
        <div className="boxText">
          <div className="card_load_extreme_title">{nombre}</div>
          <div className="card_load_extreme_descripion">{descripcion}</div>
        </div>
      </div>
      <div className="cardButtonContact">
        <button onClick={handleButton}>{button}</button>
      </div>
    </div>
  );
};

export default CardContact;
