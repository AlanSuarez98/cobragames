import { lazy } from "react";

// Componentes cargados dinámicamente
const Home = lazy(() => import("./components/home/Home"));
const Products = lazy(() => import("./components/products/Products"));
const ProductConsole = lazy(() =>
  import("./components/productConsole/ProductConsole")
);
const ProductTarget = lazy(() =>
  import("./components/productTarget/ProductTarget")
);
const GameDetail = lazy(() => import("./components/gameDetail/GameDetail"));
const CardDetail = lazy(() => import("./components/cardDetail/CardDetail"));
const Contact = lazy(() => import("./components/contact/Contact"));
const NotFound = lazy(() => import("./components/notFound/NotFound"));
const Media = lazy(() => import("./components/media/Media"));

// Definición de rutas
const appRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/tienda",
    element: <Products />,
  },
  {
    path: "/tienda/consola/:platform",
    element: <ProductConsole />,
  },
  {
    path: "/tienda/tarjetas",
    element: <ProductTarget />,
  },
  {
    path: "/tienda/juego/:platform/:nombre",
    element: <GameDetail />,
  },
  {
    path: "/tienda/tarjeta/:nombre",
    element: <CardDetail />,
  },
  {
    path: "/videos",
    element: <Media />,
  },
  {
    path: "/contacto",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default appRoutes;
