// Nav.js

import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../../assets/Logo.png";
import { useNavigate } from "react-router";
import BtnNews from "../subComponents/btnNews/BtnNews";
import Search from "../subComponents/search/Search";

const Nav = ({ onSearch, showSearchInput, showTitle }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");
    if (loggedInUserEmail) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleHome = () => {
    navigate("/");
  };

  const openInstagram = () => {
    const instagramUrl = `https://www.instagram.com/cobragames.ok/`;
    window.open(instagramUrl, "_blank");
  };

  const handleMyAccount = () => {
    navigate("/dashboard");
  };

  const handleGamesPS4 = () => {
    navigate("/tienda/consola/PS4");
  };

  const handleGamesPS5 = () => {
    navigate("/tienda/consola/PS5");
  };

  const handleCard = () => {
    navigate("/tienda/tarjetas");
  };

  const handleShop = () => {
    navigate("/tienda");
  };

  const handleContact = () => {
    navigate("/contacto");
  };

  return (
    <div className="nav">
      <div className="navTop">
        <div className="image" onClick={handleHome}>
          <img src={logo} alt="" />
          {showTitle && <h1>Cobra Games</h1>}
        </div>
        {showSearchInput && (
          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onSearch={onSearch}
          />
        )}
        <div className="btnNav">
          {isLoggedIn ? (
            <button onClick={handleMyAccount}>Mi Cuenta</button>
          ) : (
            <BtnNews openInstagram={openInstagram} />
          )}
        </div>
      </div>
      <div className="navBottom">
        <button onClick={handleShop}>Tienda</button>
        <button onClick={handleGamesPS5}>
          <span>{">  "}</span> Juegos PS5
        </button>
        <button onClick={handleGamesPS4}>
          <span>{">  "}</span> Juegos PS4
        </button>
        <button onClick={handleCard}>
          <span>{">  "}</span> Tarjetas
        </button>
        <button onClick={handleContact}>
          <span>{">  "}</span> Contacto
        </button>
      </div>
    </div>
  );
};

export default Nav;
