import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import menu from "../../data/menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const base =
    "relative px-3 py-2 transition text-gray-700 hover:text-brand-primary " +
    "after:absolute after:left-3 after:-bottom-1 after:h-0.5 after:bg-brand-primary " +
    "after:w-[calc(100%-1.5rem)] after:origin-left after:scale-x-0 after:transition after:duration-300";
  const active = "text-brand-primary after:scale-x-100";

  return (
    <header
      className={
        "sticky top-0 z-50 transition-colors " +
        (isScrolled
          ? "bg-white/90 backdrop-blur border-b shadow-sm"
          : "bg-white/40 backdrop-blur border-b border-white/50")
      }
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Marca */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold">
            AR
          </div>
          <span className="font-semibold">Andres Arce Diputado</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {menu.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) => `${base} ${isActive ? active : ""}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Botón mobile */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300/70 hover:bg-gray-100/70 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? "M6 6l12 12M18 6L6 18" : "M3 6h18M3 12h18M3 18h18"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Drawer mobile */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="px-4 pb-4 pt-2 grid gap-2 bg-white/90 backdrop-blur">
          {menu.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-xl px-3 py-2 transition ${
                  isActive
                    ? "bg-brand-primary text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
