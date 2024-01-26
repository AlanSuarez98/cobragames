import React, { useState } from "react";
import "./CardAnswer.css";

const CardAnswer = ({ answer, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={`cardAnswer ${showDescription ? "show-description" : ""}`}>
      <div className="answer">
        <h1>{answer}</h1>
        <h2 onClick={toggleDescription}>+</h2>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardAnswer;
