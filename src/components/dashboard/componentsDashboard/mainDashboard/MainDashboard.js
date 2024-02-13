import Profile from "../profile/Profile";
import "./MainDashboard.css";

const MainDashboard = () => {
  return (
    <div className="mainDashboard">
      <div className="boxDashboard">
        <div className="menuLateral">
          <button>MI PERFIL</button>
          <button>MIS COMPRAS</button>
          <button>MIS RESEÑAS</button>
          <button>FAVORITOS</button>
        </div>
        <div className="menuArticle">
          <div className="boxArticle">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
