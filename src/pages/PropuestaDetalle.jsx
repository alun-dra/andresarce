// src/pages/PropuestaDetalle.jsx
import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { downloadProgramaPDF } from "../utils/programPdf";

// Dummy (compártelo con Propuestas.jsx si quieres)
const PROPUESTAS = [
  { slug: "item-1", titulo: "Propuesta 1", eje: "Lorem ipsum", resumen: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", updatedAt: "2025-07-01" },
  { slug: "item-2", titulo: "Propuesta 2", eje: "Lorem ipsum", resumen: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", updatedAt: "2025-06-28" },
  { slug: "item-3", titulo: "Propuesta 3", eje: "Lorem ipsum", resumen: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.", updatedAt: "2025-06-20" },
  { slug: "item-4", titulo: "Propuesta 4", eje: "Lorem ipsum", resumen: "Duis aute irure dolor in reprehenderit in voluptate velit esse.", updatedAt: "2025-06-15" },
  { slug: "item-5", titulo: "Propuesta 5", eje: "Lorem ipsum", resumen: "Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.", updatedAt: "2025-06-10" },
  { slug: "item-6", titulo: "Propuesta 6", eje: "Lorem ipsum", resumen: "Cupidatat non proident, sunt in culpa qui officia deserunt.", updatedAt: "2025-06-05" },
];

export default function PropuestaDetalle() {
  const { slug } = useParams();
  const propuesta = useMemo(() => PROPUESTAS.find((p) => p.slug === slug), [slug]);
  const [openFaq, setOpenFaq] = useState(null);

  if (!propuesta) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20">
        <h1 className="text-2xl font-bold">Propuesta no encontrada</h1>
        <Link to="/propuestas" className="text-brand-secondary underline mt-4 block">
          Volver a Propuestas
        </Link>
      </div>
    );
  }

  const handleDownload = () => {
    downloadProgramaPDF({
      propuestas: [propuesta],
      titulo: `Andrés Arce – Propuesta: ${propuesta.titulo}`,
      autor: "Campaña Andrés Arce",
    });
  };

  const handleShare = async () => {
    const data = { title: `Propuesta: ${propuesta.titulo}`, text: propuesta.resumen, url: window.location.href };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(data.url);
        alert("Enlace copiado al portapapeles");
      }
    } catch (_) {}
  };

  return (
    <div className="min-h-screen bg-gray-50 text-smooth">
      {/* HERO (sin animación de opacidad) */}
      <section
        className="relative text-white"
        style={{
          background:
            "linear-gradient(120deg, #0B1B2B 0%, #0B5FFF 50%, #1e3a8a 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-24">
          {/* breadcrumb + chip */}
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Link to="/" className="hover:underline">Inicio</Link>
            <span>•</span>
            <Link to="/propuestas" className="hover:underline">Propuestas</Link>
          </div>

          <div className="mt-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-brand-accent" />
              {propuesta.eje}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black mt-3 leading-tight">
            {propuesta.titulo}
          </h1>
          <p className="mt-2 text-white/80 text-sm">
            Última actualización: {propuesta.updatedAt}
          </p>

          {/* Acciones sticky */}
          <div className="mt-6">
            <div className="sticky top-16 z-20">
              <div className="inline-flex flex-wrap gap-3">
                <Link
                  to="/propuestas"
                  className="inline-flex items-center rounded-full border border-white/50 px-5 py-2.5 hover:bg-white/10 transition"
                >
                  ← Volver a propuestas
                </Link>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center rounded-full bg-white text-brand-primary px-5 py-2.5 font-semibold hover:opacity-90 transition"
                >
                  Descargar PDF
                </button>
                <button
                  onClick={handleShare}
                  className="inline-flex items-center rounded-full border border-white/50 px-5 py-2.5 hover:bg-white/10 transition"
                >
                  Compartir
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* borde curvo (más alto y detrás) */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 rounded-t-[28px] bg-gray-50 z-[1]" />

      </section>

      {/* BODY */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pt-6 pb-16">

        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          {/* Columna principal */}
          <main>
            <article id="resumen" className="scroll-mt-32 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-brand-dark mb-3">Resumen</h2>
              <p className="text-gray-700 leading-relaxed">{propuesta.resumen}</p>
            </article>

            <article id="programa" className="scroll-mt-32 mt-6 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Programa de la propuesta</h2>
              <ol className="relative border-s-2 border-brand-secondary/30 pl-6 space-y-6">
                {[
                  "Diagnóstico participativo comunal y regional.",
                  "Diseño de medidas priorizadas con metas trimestrales.",
                  "Implementación con pilotos y evaluación continua.",
                  "Escalamiento y convenio con municipios / servicios.",
                  "Transparencia, indicadores y reportes abiertos.",
                ].map((txt, i) => (
                  <li key={i} className="group">
                    <div className="absolute -start-[9px] mt-1 h-4 w-4 rounded-full bg-brand-secondary" />
                    <div className="rounded-xl border p-4 hover:shadow-md transition">
                      <div className="text-xs font-semibold text-brand-secondary mb-1">Paso {i + 1}</div>
                      <p className="text-gray-700">{txt}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            <article id="beneficios" className="scroll-mt-32 mt-6 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Beneficios esperados</h2>
              <div className="flex flex-wrap gap-2">
                {["Más seguridad barrial", "Atención más rápida", "Ahorro para familias", "Apoyo a pymes locales", "Mayor transparencia"].map((b) => (
                  <span key={b} className="rounded-full bg-blue-50 text-brand-primary px-4 py-2 text-sm border border-blue-100">
                    {b}
                  </span>
                ))}
              </div>
            </article>

            <article id="indicadores" className="scroll-mt-32 mt-6 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Indicadores de seguimiento</h2>
              <div className="space-y-4">
                {[
                  { label: "Cobertura de la medida", value: 65 },
                  { label: "Satisfacción ciudadana", value: 78 },
                  { label: "Cumplimiento trimestral", value: 52 },
                ].map((it) => (
                  <div key={it.label}>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>{it.label}</span><span>{it.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                      <div className="h-full rounded-full bg-brand-secondary" style={{ width: `${it.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article id="compromisos" className="scroll-mt-32 mt-6 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Compromisos</h2>
              <ul className="space-y-2">
                {[
                  "Publicar avances mensuales del plan.",
                  "Abrir datos y contratos relacionados.",
                  "Mesa de trabajo con vecinos y pymes.",
                ].map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-3 w-3 rounded-full bg-green-500" />
                    <span className="text-gray-700">{c}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article id="faq" className="scroll-mt-32 mt-6 rounded-2xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Preguntas frecuentes</h2>
              <div className="divide-y">
                {[
                  { q: "¿Cuándo comenzaría la implementación?", a: "En el primer trimestre posterior a la aprobación del plan, partiendo con pilotos comunales." },
                  { q: "¿De dónde provienen los recursos?", a: "Optimización de programas existentes, convenios y reasignaciones con transparencia total." },
                  { q: "¿Cómo se evalúa el impacto?", a: "Indicadores trimestrales públicos y evaluación externa anual." },
                ].map((f, i) => (
                  <div key={i} className="py-3">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left flex items-center justify-between py-1"
                    >
                      <span className="font-semibold">{f.q}</span>
                      <span className="text-gray-400">{openFaq === i ? "–" : "+"}</span>
                    </button>
                    {openFaq === i && <p className="mt-2 text-gray-700">{f.a}</p>}
                  </div>
                ))}
              </div>
            </article>
          </main>

          {/* Sidebar sticky */}
          <aside className="lg:sticky lg:top-24 h-fit">
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-700">En esta propuesta</h3>
              <nav className="mt-3 grid gap-2 text-sm">
                {[
                  { id: "resumen", label: "Resumen" },
                  { id: "programa", label: "Programa" },
                  { id: "beneficios", label: "Beneficios" },
                  { id: "indicadores", label: "Indicadores" },
                  { id: "compromisos", label: "Compromisos" },
                  { id: "faq", label: "Preguntas frecuentes" },
                ].map((i) => (
                  <a key={i.id} href={`#${i.id}`} className="text-gray-700 hover:text-brand-primary">
                    {i.label}
                  </a>
                ))}
              </nav>

              <div className="mt-5 border-t pt-4 text-sm text-gray-600">
                <div className="flex items-center justify-between">
                  <span>Actualizada</span>
                  <span className="font-medium">{propuesta.updatedAt}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span>Eje</span>
                  <span className="font-medium">{propuesta.eje}</span>
                </div>
              </div>

              <div className="mt-5 grid gap-2">
                <button
                  onClick={handleDownload}
                  className="w-full rounded-xl bg-brand-secondary text-white py-2.5 font-semibold hover:opacity-95 transition"
                >
                  Descargar PDF
                </button>
                <Link
                  to="/propuestas"
                  className="w-full text-center rounded-xl border border-gray-300 py-2.5 font-semibold hover:bg-gray-50 transition"
                >
                  ← Volver
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
