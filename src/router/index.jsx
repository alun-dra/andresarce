import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Propuestas from "../pages/Propuestas";
import Biografia from "../pages/Biografia";
import Noticias from "../pages/Noticias";
import Contacto from "../pages/Contacto";
import PropuestaDetalle from "../pages/PropuestaDetalle";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/propuestas" element={<Propuestas />} />
      <Route path="/propuestas/:slug" element={<PropuestaDetalle />} />
      <Route path="/biografia" element={<Biografia />} />
      <Route path="/noticias" element={<Noticias />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}
