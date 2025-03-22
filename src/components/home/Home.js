import React, { useEffect, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import ErrorBoundary from "../../ErrorBoundary"; // Asegúrate de que la ruta sea correcta
import Loading from "../loader/Loader"; // Componente de carga
import "./Home.css";

// Componentes cargados dinámicamente
const HeaderHome = lazy(() => import("./componentsHome/headerHome/HeaderHome"));
const NavHome = lazy(() => import("./componentsHome/navHome/NavHome"));
const Advertising = lazy(() =>
  import("./componentsHome/advertising/Advertising")
);
const MainHome = lazy(() => import("./componentsHome/mainHome/MainHome"));
const WhySelect = lazy(() => import("./componentsHome/whySelect/WhySelect"));
const AnswerHome = lazy(() => import("./componentsHome/answerHome/AnswerHome"));
const FooterHome = lazy(() => import("./componentsHome/footerHome/FooterHome"));

const Home = () => {
  useEffect(() => {
    document.title = "Cobra Games";
  }, []);

  return (
    <div className="home">
      <Helmet>
        <title>Cobra Games - Inicio</title>
        <meta
          name="description"
          content="Bienvenido a Cobra Games, tu tienda de videojuegos digitales."
        />
        <meta
          name="keywords"
          content="videojuegos, videojuegos digitales, tienda, gaming, Cobra Games"
        />
      </Helmet>

      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <header>
            <HeaderHome />
          </header>
          <nav>
            <NavHome />
          </nav>
          <Advertising />
          <main>
            <MainHome />
          </main>
          <section>
            <WhySelect />
          </section>
          <section>
            <AnswerHome />
          </section>
          <footer>
            <FooterHome />
          </footer>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Home;
