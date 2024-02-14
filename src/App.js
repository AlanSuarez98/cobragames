import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Products from "./components/products/Products";
import LoginSignUp from "./components/loginsignup/LoginSignUp";
import Dashboard from "./components/dashboard/Dashboard";
import ProductConsole from "./components/productConsole/ProductConsole";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catálogo" element={<Products />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/consola/:plataforma" element={<ProductConsole />} />
      </Routes>
    </Router>
  );
}

export default App;
