import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Tratamientos from "./pages/Tratamientos";
import Productos from "./pages/Productos";
import SobreMi from "./pages/SobreMi";
import AgendarTurno from "./pages/AgendarTurno";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tratamientos" element={<Tratamientos />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/agendar-turno" element={<AgendarTurno />} />
      </Routes>
    </Router>
  );
}

export default App;
