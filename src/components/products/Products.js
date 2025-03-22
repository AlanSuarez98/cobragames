import React, { useEffect, Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import ErrorBoundary from "../../ErrorBoundary"; // Asegúrate de que la ruta sea correcta
import Loading from "../loader/LoaderGames"; // Componente de carga
import "./Products.css";

// Componentes cargados dinámicamente
const Nav = lazy(() => import("../nav/Nav"));
const Advertising = lazy(() =>
  import("../home/componentsHome/advertising/Advertising")
);
const ContainCards = lazy(() =>
  import("./componentsProducts/containCards/ContainCards")
);
const ContainTarget = lazy(() =>
  import("./componentsProducts/containTarget/ContainTarget")
);
const FooterHome = lazy(() =>
  import("../home/componentsHome/footerHome/FooterHome")
);

const Products = () => {
  useEffect(() => {
    document.title = "Cobra Games | Tienda";
  }, []);

  return (
    <div className="products">
      <Helmet>
        <title>Cobra Games - Tienda</title>
        <meta
          name="description"
          content="Explora nuestra tienda de videojuegos digitales en Cobra Games."
        />
        <meta
          name="keywords"
          content="videojuegos, videojuegos digitales, tienda, gaming, Cobra Games, PS5, PS4"
        />
      </Helmet>

      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <header>
            <Nav className="nav" showSearchInput={false} showTitle={true} />
          </header>
          <nav>
            <Advertising />
          </nav>
          <main className="containGames">
            <ContainCards plataforma={"PS5"} />
            <ContainTarget />
            <ContainCards plataforma={"PS4"} />
          </main>
          <footer>
            <FooterHome />
          </footer>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Products;
