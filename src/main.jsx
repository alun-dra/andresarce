import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import "./styles/globals.css";

// Componente para activar scroll suave con Lenis
function SmoothScroll() {
  useEffect(() => {
    import("@studio-freight/lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({
        smoothWheel: true,
        duration: 1.2, // velocidad del easing
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    });
  }, []);

  return null;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SmoothScroll />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
