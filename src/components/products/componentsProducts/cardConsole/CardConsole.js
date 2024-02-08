import React, { useState } from "react";
import "./CardConsole.css";

const CardConsole = ({ console }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className={`card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="background-image" />
      <div className="console">
        <img
          src={console}
          alt="Consola PS5"
          className={`console-image ${isHovered ? "animated" : ""}`}
        />
        {/* Puedes agregar más información sobre la consola aquí */}
      </div>
    </div>
  );
};

export default CardConsole;
