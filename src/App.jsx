import "./App.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import Produtos from "./pages/Produtos/Produtos";

// Components
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Produtos />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
