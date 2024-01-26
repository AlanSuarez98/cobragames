import CardPlatforms from "../../../cardPlatforms/CardPlatforms";
import "./MainHome.css";
import ps4 from "../../../../assets/ps4.png";
import ps5 from "../../../../assets/ps5.png";
import xbox from "../../../../assets/xbox.png";
import pc from "../../../../assets/pc.png";
const MainHome = () => {
  return (
    <div className="mainHome">
      <h1>Plataformas</h1>
      <div className="containCards">
        <CardPlatforms icon={ps4} name={"PS4"} />
        <CardPlatforms icon={ps5} name={"PS5"} />
        <CardPlatforms icon={xbox} name={"XBOX"} />
        <CardPlatforms icon={pc} name={"PC"} />
      </div>
    </div>
  );
};

export default MainHome;
