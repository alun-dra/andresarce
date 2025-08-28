import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { downloadProgramaPDF } from "../utils/programPdf";

// --- Datos de ejemplo (cámbialos por tu fuente real) ---
const Ejes = ["Todos", "Seguridad", "Transparencia", "Salud", "Educación", "Adulto mayor", "Empleo"];

const PROPUESTAS = [
  { slug: "item-1", titulo: "Propuesta 1", eje: "Lorem ipsum", resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", updatedAt: "2025-07-01" },
  { slug: "item-2", titulo: "Propuesta 2", eje: "Lorem ipsum", resumen: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", updatedAt: "2025-06-28" },
  { slug: "item-3", titulo: "Propuesta 3", eje: "Lorem ipsum", resumen: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", updatedAt: "2025-06-20" },
  { slug: "item-4", titulo: "Propuesta 4", eje: "Lorem ipsum", resumen: "Duis aute irure dolor in reprehenderit in voluptate velit esse.", updatedAt: "2025-06-15" },
  { slug: "item-5", titulo: "Propuesta 5", eje: "Lorem ipsum", resumen: "Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.", updatedAt: "2025-06-10" },
  { slug: "item-6", titulo: "Propuesta 6", eje: "Lorem ipsum", resumen: "Cupidatat non proident, sunt in culpa qui officia deserunt.", updatedAt: "2025-06-05" },
];


// --- Componente principal ---
export default function Propuestas() {
  const [query, setQuery] = useState("");
  const [eje, setEje] = useState("Todos");
  const [orden, setOrden] = useState("recientes"); // recientes | alfabetico
  const tituloPDF = "Andrés Arce – Candidato a Diputado: Propuestas";

  const resultados = useMemo(() => {
    let items = [...PROPUESTAS];

    // filtro por eje
    if (eje !== "Todos") items = items.filter((p) => p.eje === eje);

    // filtro por texto
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      items = items.filter(
        (p) =>
          p.titulo.toLowerCase().includes(q) ||
          p.resumen.toLowerCase().includes(q)
      );
    }

    // orden
    if (orden === "recientes") {
      items.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    } else {
      items.sort((a, b) => a.titulo.localeCompare(b.titulo));
    }

    return items;
  }, [query, eje, orden]);

  return (
    <div className="min-h-dvh bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-b from-brand-primary to-[#0f2a46] text-white">
        <div className="max-w-7xl mx-auto px-4 py-14">
          <p className="text-brand-accent/80 font-semibold tracking-wide">Programa</p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mt-2">
            Propuestas para un Chile <span className="text-brand-accent">más justo</span>
          </h1>
          <p className="mt-4 max-w-3xl text-white/80">
            Explora las propuestas por eje temático. Puedes buscar por palabras clave y ordenar los resultados.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#grid"
              className="inline-flex items-center rounded-full border border-white/50 px-5 py-2.5 hover:bg-white/10 transition"
            >
              Ver propuestas
            </a>
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    downloadProgramaPDF({
                    propuestas: resultados, // usa resultados (filtrados) o PROPUESTAS para todo
                    titulo: tituloPDF,
                    autor: "Campaña Andrés Arce",
                    });
                }}
                className="inline-flex items-center rounded-full bg-white text-brand-primary px-5 py-2.5 font-semibold hover:opacity-90 transition"
                >
                Descargar Programa (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* CONTROLES: sticky bajo el navbar, sin desbordes */}
    <section className="sticky top-16 z-30 bg-white/95 backdrop-blur border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
            {/* Fila superior: buscador + select (alineados y estables) */}
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
        {/* Buscador (crece) */}
        <div className="flex-1 min-w-0">
            <label htmlFor="q" className="sr-only">Buscar propuestas</label>
            <div className="relative">
                <input
                    id="q"
                    type="text"
                    placeholder="Buscar por título o resumen..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full h-12 rounded-2xl border border-gray-300 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                />
                <svg
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="M21 21l-4.3-4.3"></path>
                </svg>
            </div>
        </div>

        {/* Orden (ancho fijo, no colapsa) */}
        <div className="shrink-0 md:w-64">
            <label htmlFor="orden" className="sr-only">Ordenar por</label>
            <div className="relative">
                <select
                    id="orden"
                    value={orden}
                    onChange={(e) => setOrden(e.target.value)}
                    className="w-full h-12 rounded-2xl border border-gray-300 pl-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                >
                    <option value="recientes">Más recientes</option>
                    <option value="alfabetico">Alfabético (A–Z)</option>
                </select>
                {/* Chevron del select */}
                <svg
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
            </div>
        </div>
        </div>


        {/* Chips: carrusel horizontal, sin márgenes negativos */}
        <div className="mt-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-none py-6">
            {Ejes.map((op) => (
            <button
                key={op}
                onClick={() => setEje(op)}
                className={
                "whitespace-nowrap rounded-full px-4 py-2 text-sm transition " +
                (eje === op
                    ? "bg-brand-secondary text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700")
                }
            >
                {op}
            </button>
            ))}
        </div>
        </div>




    </div>
    </section>


      {/* GRID */}
      <section id="grid">
        <div className="max-w-7xl mx-auto px-4 py-10">
          {/* contador */}
          <div className="mb-4 text-sm text-gray-600">
            {resultados.length} resultado{resultados.length !== 1 ? "s" : ""} {eje !== "Todos" && `• ${eje}`}
            {query && ` • “${query}”`}
          </div>

          {resultados.length === 0 ? (
            <div className="rounded-2xl border bg-white p-8 text-center text-gray-600">
              Sin resultados. Prueba con otras palabras o cambia los filtros.
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {resultados.map((p) => (
                <Link
                  key={p.slug}
                  to={`/propuestas/${p.slug}`}
                  className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg hover:border-brand-primary transition"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-brand-secondary">
                    <span className="inline-block h-2 w-2 rounded-full bg-brand-secondary" />
                    {p.eje}
                  </div>
                  <h3 className="mt-2 text-xl md:text-2xl font-bold text-brand-dark group-hover:text-brand-primary">
                    {p.titulo}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">{p.resumen}</p>
                  <div className="mt-4 inline-flex items-center text-sm font-medium text-brand-secondary group-hover:text-brand-primary">
                    Ver propuesta
                    <svg
                      className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
