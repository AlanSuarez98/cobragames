import "./LoginSignUp.css";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Message from "../message/Message";
import PopUp from "../popup/PopUp";

const LoginSignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const navigate = useNavigate();
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [showPopUp, setShowPopUp] = useState(true);

  useEffect(() => {
    document.title = "Cobra Games | Login";
  }, []);

  const handleClosePopUp = () => {
    setShowPopUp(false); // Cambia el estado para ocultar el PopUp
  };

  const handleInicioSesion = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://data-userscobragames.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ emailLogin, passwordLogin }),
        }
      );
      if (response.ok) {
        localStorage.setItem("loggedInUserEmail", emailLogin);
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  const handleRegistro = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://data-userscobragames.onrender.com/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
        }),
      });
    } catch (error) {
      console.error("Error al enviar correo electrónico:", error);
    }
  };

  const handleMessage = () => {
    setRegistroExitoso(true);
  };
  const handleCloseMessage = () => {
    setRegistroExitoso(false); // Cambia el estado para ocultar el mensaje
  };

  const message =
    "¡Registro exitoso! En breve nos contactaremos al email ingresado";
  return (
    <>
      {showPopUp && (
        <PopUp
          onClose={handleClosePopUp}
          text1={
            "Antes de comenzar, queremos informarte que para registrarte o crear una cuenta, necesitamos que ingreses los datos solicitados. Una vez hecho esto, dentro de un plazo de 24 a 72 horas, te enviaremos los detalles de tu cuenta para que puedas comenzar a disfrutar de nuestros servicios."
          }
          text2={
            "Si pasado este tiempo no recibes ninguna novedad, por favor contáctate con nuestro equipo de soporte"
          }
        />
      )}
      <Nav showTitle={true} />
      <div className="messageBox">
        {registroExitoso && (
          <Message message={message} onClose={handleCloseMessage} />
        )}
      </div>
      <div className="boxLogin">
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
                    <div className="title">Creación de Cuenta</div>
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
                      <button
                        type="submit"
                        onClick={handleMessage}
                        className="flip-card__btn"
                      >
                        Registrarse
                      </button>
                    </form>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginSignUp;
