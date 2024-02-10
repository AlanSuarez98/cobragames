import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import LoginSignUp from "./components/loginsignup/LoginSignUp";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/catálogo", element: <Products /> },
    { path: "/login", element: <LoginSignUp /> },
    { path: "/dashboard", element: <Dashboard /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
