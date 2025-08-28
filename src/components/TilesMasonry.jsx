import { Link } from "react-router-dom";
import {
  ShieldCheckIcon,
  EyeDropperIcon,
  HeartIcon,
  AcademicCapIcon,
  BuildingStorefrontIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

const propuestas = [
  { slug: "item-1", titulo: "propuesta 1" },
  { slug: "item-2", titulo: "propuesta 2" },
  { slug: "item-3", titulo: "propuesta 3" },
  { slug: "item-4", titulo: "propuesta 4" },
  { slug: "item-5", titulo: "propuesta 5" },
  { slug: "item-6", titulo: "propuesta 6" },
];

const META = [
  { eje: "Seguridad", Icon: ShieldCheckIcon, color: "from-blue-500 to-indigo-600", desc: "Más presencia en terreno y coordinación local." },
  { eje: "Transparencia", Icon: EyeDropperIcon, color: "from-cyan-500 to-blue-500", desc: "Datos abiertos y compras públicas claras." },
  { eje: "Salud", Icon: HeartIcon, color: "from-rose-500 to-red-600", desc: "Atención oportuna y metas de reducción de listas." },
  { eje: "Educación", Icon: AcademicCapIcon, color: "from-emerald-500 to-teal-600", desc: "Refuerzo escolar y apoyo a docentes." },
  { eje: "Empleo", Icon: BuildingStorefrontIcon, color: "from-amber-500 to-orange-500", desc: "Impulso a pymes locales y capacitación." },
  { eje: "Adulto mayor", Icon: UsersIcon, color: "from-purple-500 to-fuchsia-600", desc: "Programas de apoyo y acceso a medicamentos." },
];

/** Franja superior como "píldora" interna: no toca los bordes y respeta el radio. */
function TopStrip({ gradient }) {
  return (
    <div className="pointer-events-none absolute left-4 right-4 top-3">
      <div className={`h-[6px] rounded-full bg-gradient-to-r ${gradient}`} />
    </div>
  );
}

export default function PropuestasGrid() {
  const [destacada, ...resto] = propuestas;

  return (
    <section id="programa" className="relative overflow-hidden bg-gray-50">
      {/* blobs suaves de fondo */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-brand-secondary font-semibold tracking-wide">Programa 2025</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-dark leading-tight">
              Ejes y <span className="text-brand-primary">Propuestas</span>
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              Un plan concreto, medible y cercano. Explora los pilares y conoce las acciones clave.
            </p>
          </div>

          <Link
            to="/propuestas"
            className="inline-flex items-center self-start md:self-auto rounded-full bg-brand-secondary px-5 py-2.5 text-white font-semibold shadow-sm hover:opacity-90 transition"
          >
            Ver todas
            <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* DESTACADA */}
          {destacada && (
            <Link
              to={`/propuestas/${destacada.slug}`}
              className="group relative overflow-hidden rounded-2xl p-7 md:p-8 text-white shadow-lg lg:col-span-2
                         bg-gradient-to-br from-brand-primary via-blue-600 to-indigo-700"
            >
              <div className="absolute inset-0 opacity-25 bg-[radial-gradient(80%_60%_at_30%_20%,#fff,transparent)]" />
              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur">
                  Propuesta destacada
                </span>
                <h3 className="mt-3 text-2xl md:text-3xl font-extrabold">{destacada.titulo}</h3>
                <p className="mt-2 text-white/90 max-w-2xl">
                  Conoce la iniciativa emblema del programa, con medidas, indicadores y compromisos.
                </p>

                <div className="mt-5 flex flex-wrap gap-2 text-sm text-white/90">
                  <span className="rounded-full border border-white/40 px-3 py-1 backdrop-blur">Metas trimestrales</span>
                  <span className="rounded-full border border-white/40 px-3 py-1 backdrop-blur">Evaluación pública</span>
                  <span className="rounded-full border border-white/40 px-3 py-1 backdrop-blur">Participación vecinal</span>
                </div>

                <span className="mt-6 inline-flex items-center rounded-full bg-white text-brand-primary px-4 py-2 font-semibold">
                  Ver más
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          )}

          {/* SECUNDARIAS */}
          {resto.map((p, i) => {
            const meta = META[(i + 1) % META.length];
            const badge = `#${String(i + 2).padStart(2, "0")}`;

            return (
              <Link
                key={p.slug}
                to={`/propuestas/${p.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200
                           hover:-translate-y-0.5 hover:shadow-lg hover:ring-brand-primary/40 transition"
              >
                {/* franja tipo píldora (inset y redondeada) */}
                <TopStrip gradient={meta.color} />

                {/* número sutil integrado */}
                {/* <span className="absolute right-3 top-3 rounded-full bg-gray-100/90 px-2 py-[1px] text-[11px] font-semibold text-gray-700 shadow-sm">
                  {badge}
                </span> */}

                {/* Icono + eje */}
                <div className="flex items-center gap-3">
                  <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${meta.color} text-white
                                   flex items-center justify-center shadow-sm`}>
                    <meta.Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold text-brand-secondary/90">{meta.eje}</span>
                </div>

                {/* Título */}
                <h3 className="mt-2 text-xl md:text-2xl font-bold text-brand-dark group-hover:text-brand-primary">
                  {p.titulo}
                </h3>

                {/* Descripción */}
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{meta.desc}</p>

                {/* Chips */}
                <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-gray-600">
                  <span className="rounded-full bg-gray-100 px-2.5 py-1">Indicadores</span>
                  <span className="rounded-full bg-gray-100 px-2.5 py-1">Transparencia</span>
                </div>

                {/* CTA */}
                <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-secondary group-hover:text-brand-primary">
                  Ver más
                  <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
