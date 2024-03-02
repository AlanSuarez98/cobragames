import React, { useState } from "react";
import "./CardConsole.css";

const CardConsole = ({ consola }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className={`cardConsole ${isHovered ? "hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="background-image" />
      <div className="console">
        <img
          src={consola}
          alt="Consola PS5"
          className={`console-image ${isHovered ? "animated" : ""}`}
        />
        {/* Puedes agregar más información sobre la consola aquí */}
      </div>
    </div>
  );
};

export default CardConsole;
