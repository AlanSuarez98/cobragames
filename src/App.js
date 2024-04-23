import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
/*import LoginSignUp from "./components/loginsignup/LoginSignUp";
import Dashboard from "./components/dashboard/Dashboard";*/
import ProductConsole from "./components/productConsole/ProductConsole";
import ProductTarget from "./components/productTarget/ProductTarget";
import GameDetail from "./components/gameDetail/GameDetail";
/*import ProtectedLogin from "./ProtectedLogin";
import ProtectedDashboard from "./ProtectedDashboard";*/
import CardDetail from "./components/cardDetail/CardDetail";
import Contact from "./components/contact/Contact";
import NotFound from "./components/notFound/NotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/catálogo",
      element: <Products />,
    },
    /*{
      path: "/login",
      element: (
        <ProtectedLogin>
          <LoginSignUp />
        </ProtectedLogin>
      ),
    },
    {
      path: "/dashboard",
      element: (
        <ProtectedDashboard>
          <Dashboard />
        </ProtectedDashboard>
      ),
    },*/
    {
      path: "/consola/:platform",
      element: <ProductConsole />,
    },
    {
      path: "/tarjetas",
      element: <ProductTarget />,
    },
    {
      path: "/juego/:nombre",
      element: <GameDetail />,
    },
    {
      path: "/tarjeta/:nombre",
      element: <CardDetail />,
    },
    {
      path: "/contacto",
      element: <Contact />,
    },
    {
      // Esta ruta captura todas las demás rutas que no coinciden con las anteriores
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
