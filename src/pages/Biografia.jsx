import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Biografia() {
  // Micro-reveals con IntersectionObserver (no rompe nada si falla)
  useEffect(() => {
  const els = Array.from(document.querySelectorAll(".reveal"));

  // Marcar de inmediato los que ya están a la vista (primer load)
  const vh = window.innerHeight || 800;
  els.forEach((el) => {
    const { top } = el.getBoundingClientRect();
    if (top < vh * 0.9) el.classList.add("in");
  });

  // IO como progresivo: si está disponible, anima el resto
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }
}, []);


  return (
    <div className="min-h-dvh bg-gray-50 text-smooth">
      {/* ===== HERO ======================================================== */}
      <section
        className="relative text-white"
        style={{
          background:
            "linear-gradient(120deg, #0B1B2B 0%, #0B5FFF 50%, #1e3a8a 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-14">
          <div className="grid md:grid-cols-[1.1fr_.9fr] gap-8 items-center">
            <div className="reveal opacity-0 translate-y-3">
              <p className="text-white/80 text-sm font-semibold">Biografía</p>
              <h1 className="tracking-hero text-4xl md:text-6xl font-black mt-2 leading-tight">
                Andrés Arce <span className="text-brand-accent">— cercano,
                transparente</span> y con resultados
              </h1>
              <p className="mt-4 text-white/85 max-w-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reiciendis minima, laudantium assumenda explicabo at d Ex minima molestiae sint ipsum facilis voluptatibus nam. Saepe.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#historia"
                  className="btn-ghost-ring inline-flex items-center rounded-full border border-white/50 px-5 py-2.5 hover:bg-white/10 transition"
                >
                  Conóceme
                </a>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center rounded-full bg-white text-brand-primary px-5 py-2.5 font-semibold hover:opacity-90 transition"
                  title="Pronto: CV en PDF"
                >
                  Descargar CV (PDF)
                </button>
              </div>
            </div>

            {/* “Foto” placeholder elegante */}
            <div className="reveal opacity-0 translate-y-3">
              <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/0 z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_70%_20%,rgba(255,255,255,.18),rgba(255,255,255,.02)_60%,transparent_70%)]" />
                <div className="absolute inset-0 flex items-center justify-center text-white/60 text-sm">
                  <span className="px-3 py-1 rounded-full border border-white/40">
                    Aquí va la foto 
                  </span>
                </div>
                <div className="h-full w-full bg-[linear-gradient(135deg,#0b5fff_0%,#0b1b2b_100%)]" />
              </div>
            </div>
          </div>

          {/* Datos rápidos */}
          <div className="reveal opacity-0 translate-y-3 mt-8 grid sm:grid-cols-3 gap-3 p-6">
            {[
              { k: "+12", v: "Años de servicio público" },
              { k: "40+", v: "Proyectos impulsados" },
              { k: "7", v: "Comunas con trabajo en terreno" },
            ].map((d) => (
              <div
                key={d.v}
                className="rounded-2xl border border-white/20 bg-white/10 p-4"
              >
                <div className="text-3xl font-black">{d.k}</div>
                <div className="text-white/85 text-sm">{d.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Curva inferior */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 rounded-t-[28px] bg-gray-50 z-[1]" />
      </section>

      {/* ===== HISTORIA ==================================================== */}
      <section id="historia" className="relative z-10 max-w-7xl mx-auto px-4 pt-8 pb-12">
        <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-8 items-start">
          <article className="reveal opacity-0 translate-y-3 rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-dark">Historia</h2>
            <p className="mt-3 leading-relaxed text-gray-700">
              <span className="float-left mr-2 text-5xl leading-none font-black text-brand-primary">
                A
              </span>
              ndrés Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, adipisci nostrum expedita repellat consectetur voluptatum nam, exercitationem, sapiente dicta modi rem. Cupiditate sint ab eveniet velit corporis rem excepturi facere!
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis aliquid hic, eveniet cupiditate quaerat dolorem assumenda recusandae dolore, totam magnam esse quas, velit iusto. Aliquam quo corporis minima voluptatem deserunt?
            </p>

            {/* Cita */}
            <blockquote className="mt-6 border-l-4 border-brand-secondary pl-4 italic text-brand-dark">
              “La política se honra cuando la gente siente cambios en su vida
              cotidiana. Ese es el estándar”.
            </blockquote>
          </article>

          
          {/* Tarjeta lateral con “momentos” */}
            <aside className="reveal opacity-0 translate-y-3 rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-gray-700">Línea de tiempo</h3>

            {/* Contenedor de la línea + puntos */}
            <ol className="mt-3 relative ps-8 space-y-6">
                {/* Línea vertical (en vez de border-left para controlar mejor el offset) */}
                <span
                aria-hidden
                className="pointer-events-none absolute left-3 top-0 h-full w-px bg-gray-200"
                />

                {[
                { y: "2012", t: "Primera dirigencia vecinal." },
                { y: "2016", t: "Profesional del sector público." },
                { y: "2019", t: "Programa de transparencia comunal." },
                { y: "2022", t: "Coordinación regional de planes sociales." },
                { y: "2025", t: "Candidatura a Diputado." },
                ].map((m, idx, arr) => (
                <li key={m.y} className={idx === arr.length - 1 ? "relative" : "relative pb-1"}>
                    {/* Punto sobre la línea (con ring blanco para dar aire) */}
                    <span
                    aria-hidden
                    className="absolute left-3 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-brand-secondary ring-4 ring-white"
                    />

                    {/* Contenido con margen a la izquierda para despegar del punto */}
                    <div className="ms-4">
                    <div className="inline-flex items-center">
                        <span className="text-[11px] font-semibold text-brand-secondary bg-brand-secondary/10 px-2 py-0.5 rounded">
                        {m.y}
                        </span>
                    </div>
                    <p className="mt-1 text-gray-700">{m.t}</p>
                    </div>
                </li>
                ))}
            </ol>
            </aside>





        </div>
      </section>

      {/* ===== VALORES ===================================================== */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="reveal opacity-0 translate-y-3">
          <h2 className="text-2xl font-bold text-brand-dark">Valores</h2>
          <p className="text-gray-600 mt-1">
            Principios que guían cada decisión.
          </p>
        </div>

        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              h: "Transparencia",
              p: "Datos abiertos, compras públicas claras y rendición periódica.",
            },
            {
              h: "Cercanía",
              p: "Puertas abiertas, escucha activa y trabajo en terreno.",
            },
            {
              h: "Probidad",
              p: "Tolerancia cero a la corrupción, controles y auditoría ciudadana.",
            },
            {
              h: "Resultados",
              p: "Metas trimestrales y evaluación independiente del avance.",
            },
          ].map((v) => (
            <div
              key={v.h}
              className="reveal opacity-0 translate-y-3 rounded-2xl bg-white p-5 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-secondary">
                <span className="inline-block h-2 w-2 rounded-full bg-brand-secondary" />
                Valor
              </div>
              <h3 className="mt-2 text-lg font-bold text-brand-dark">{v.h}</h3>
              <p className="mt-1 text-gray-700 text-sm">{v.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== TESTIMONIOS ================================================= */}
      <section className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-3 gap-4">
          {[
            {
              q: "“Nos acompañó en la solución de las listas de espera locales. Se notó el cambio.”",
              a: "María, dirigenta social",
            },
            {
              q: "“Publicó contratos y gastos. Primera vez que entendimos el presupuesto comunal.”",
              a: "Víctor, emprendedor",
            },
            {
              q: "“Respeta su palabra y vuelve al barrio con resultados.”",
              a: "Daniela, profesora",
            },
          ].map((t) => (
            <figure
              key={t.a}
              className="reveal opacity-0 translate-y-3 rounded-2xl bg-white p-5 shadow-sm"
            >
              <blockquote className="text-brand-dark">{t.q}</blockquote>
              <figcaption className="mt-3 text-sm text-gray-600">— {t.a}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ===== CTA FINAL =================================================== */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
  <div className="reveal opacity-0 translate-y-3 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white p-6 md:p-8">
    {/* En mobile: stack; en md+: dos columnas fluidas */}
    <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
      {/* Texto: min-w-0 para permitir que el texto se encoja sin empujar el botón */}
      <div className="min-w-0">
        <h3 className="text-2xl font-black leading-tight">
          Conversemos de tus prioridades
        </h3>
        <p className="text-white/85 mt-1">
          Tu experiencia es la que orienta el plan. Escríbenos y súmate.
        </p>
      </div>

      {/* Acciones: flex con wrap y alineación correcta en md+ */}
      <div className="flex flex-wrap gap-3 justify-start md:justify-end">
        <a
          href="/propuestas"
          className="rounded-full bg-white text-brand-primary px-5 py-2.5 font-semibold hover:opacity-90 transition"
        >
          Ver propuestas
        </a>
        <a
          href="/contacto"
          className="btn-ghost-ring rounded-full border border-white/50 px-5 py-2.5 hover:bg-white/10 transition"
        >
          Contacto
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}
