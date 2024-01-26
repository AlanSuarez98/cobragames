import "./CardPlatforms.css";

const CardPlatforms = ({icon, name}) => {
  return (
    <div className="cardPlatforms">
      <img src={icon} alt="" />
      <h1>{name}</h1>
    </div>
  );
};

export default CardPlatforms;