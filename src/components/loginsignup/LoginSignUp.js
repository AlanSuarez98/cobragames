import "./LoginSignUp.css";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { useState } from "react";

const LoginSignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const handleInicioSesion = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://data-cobragames.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ emailLogin, passwordLogin }),
        }
      );
      const data = await response.json();
      alert(data.message);
      alert("iniciado");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://data-cobragames.onrender.com/registro",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };
  return (
    <>
      <Nav />
      <div className="loginSignUp">
        <div className="wrapper">
          <div className="card-switch">
            <label className="switch">
              <input className="toggle" type="checkbox" />
              <span className="slider"></span>
              <span className="card-side"></span>
              <div className="flip-card__inner">
                <div className="flip-card__front">
                  <div className="title">Iniciar Sesión</div>
                  <form
                    onSubmit={handleInicioSesion}
                    className="flip-card__form"
                  >
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="flip-card__input"
                      value={emailLogin}
                      onChange={(e) => setEmailLogin(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="flip-card__input"
                      value={passwordLogin}
                      onChange={(e) => setPasswordLogin(e.target.value)}
                    />
                    <button type="submit" className="flip-card__btn">
                      Iniciar Sesión
                    </button>
                  </form>
                </div>
                <div className="flip-card__back">
                  <div className="title">Registrarse</div>
                  <form onSubmit={handleRegistro} className="flip-card__form">
                    <input
                      type="name"
                      placeholder="Name"
                      className="flip-card__input"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="flip-card__input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      className="flip-card__input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="flip-card__btn">
                      Registrarse
                    </button>
                  </form>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginSignUp;
