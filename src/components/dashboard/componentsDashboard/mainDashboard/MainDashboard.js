import { useState } from "react";
import Profile from "../profile/Profile";
import CardShops from "../cardShops/CardShops";
import CardReview from "../cardReview/CardReview";
import CardFavorite from "../cardFavorite/CardFavorite";
import "./MainDashboard.css";

const MainDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("perfil");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="mainDashboard">
      <div className="boxDashboard">
        <div className="menuLateral">
          <button
            className={activeMenu === "perfil" ? "active" : ""}
            onClick={() => handleMenuClick("perfil")}
          >
            MI PERFIL
          </button>
          <button
            className={activeMenu === "compras" ? "active" : ""}
            onClick={() => handleMenuClick("compras")}
          >
            MIS COMPRAS
          </button>
          <button
            className={activeMenu === "resenas" ? "active" : ""}
            onClick={() => handleMenuClick("resenas")}
          >
            MIS RESEÑAS
          </button>
          <button
            className={activeMenu === "favoritos" ? "active" : ""}
            onClick={() => handleMenuClick("favoritos")}
          >
            FAVORITOS
          </button>
        </div>
        <div className="menuArticle">
          <div className="boxArticle">
            {activeMenu === "perfil" && <Profile />}
            {activeMenu === "compras" && <CardShops />}
            {activeMenu === "resenas" && <CardReview />}
            {activeMenu === "favoritos" && <CardFavorite />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
