import { useEffect, useRef } from 'react';
import logo from '../assets/logo.jpg';
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY;
      // solo sombra, sin ocultar el header
      el.style.boxShadow = y > 8 ? '0 8px 24px rgba(2,6,23,0.08)' : 'none';
      el.style.transform = 'translateY(0)'; // 👈 aseguramos que nunca se oculte
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="fixed inset-x-0 top-0 z-50 bg-white backdrop-blur-md transition-[box-shadow] duration-300"
    >
      <div className="container-default flex h-16 items-center justify-between gap-6">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Logo Andrés Arce" className="h-8 w-auto" />
          <span className="font-semibold tracking-tight text-coal">Andrés Arce</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          <a className="text-sm font-medium text-coal/80 hover:text-coal" href="#propuestas">Propuestas</a>
          {/* <a className="text-sm font-medium text-coal/80 hover:text-coal" href="#agenda">Agenda</a> */}
          <a className="text-sm font-medium text-coal/80 hover:text-coal" href="#accion">Tu voz</a>
          {/* <a className="text-sm font-medium text-coal/80 hover:text-coal" href="#transparencia">Transparencia</a> */}
       <a
  href="#participa"
  className="inline-flex items-center gap-2 rounded-lg bg-[#1f3869] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#152747] transition-colors"
>
  Súmate
  <ArrowRight size={16} className="text-white" />
</a>







        </div>
      </div>
    </nav>
  );
}
