import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import LoginSignUp from "./components/loginsignup/LoginSignUp";
import Dashboard from "./components/dashboard/Dashboard";
import ProductConsole from "./components/productConsole/ProductConsole";
import ProductTarget from "./components/productTarget/ProductTarget";
import GameDetail from "./components/gameDetail/GameDetail";
import ProtectedLogin from "./ProtectedLogin";
import ProtectedDashboard from "./ProtectedDashboard";

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
    {
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
    },
    {
      path: "/consola/:platform",
      element: <ProductConsole />,
    },
    {
      path: "/tarjetas",
      element: <ProductTarget />,
    },
    {
      path: "/game/:nombre",
      element: <GameDetail />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
