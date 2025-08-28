import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef(null);

  // Utilidad para dividir texto en spans (sin plugins de pago)
  const split = (text) =>
    text.split("").map((ch, i) => (
      <span key={i} className="inline-block will-change-transform">
        {ch === " " ? "\u00A0" : ch}
      </span>
    ));

  const title = useMemo(
    () => split("Un Chile más justo, cercano y honesto"),
    []
  );
  const subtitle = useMemo(
    () => split("Propuestas concretas para tu comuna y tu región."),
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación del gradiente (va desplazando el background-position)
      gsap.to(".hero-gradient", {
        backgroundPosition: "200% 0%",
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      // Entrada de letras (stagger)
      gsap.from(".hero-title span", {
        yPercent: 120,
        rotateZ: 8,
        opacity: 0,
        stagger: 0.015,
        duration: 0.7,
        ease: "power3.out",
      });
      gsap.from(".hero-subtitle span", {
        yPercent: 120,
        opacity: 0,
        stagger: 0.01,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
      });

      // Botón
      gsap.from(".hero-cta", {
        y: 16,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.4,
      });

      // Sombra que aparece al scrollear (para dar profundidad)
      gsap.to(".hero-bottom-shadow", {
        opacity: 1,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative noise-overlay">
      {/* Fondo: gradiente animado + blobs */}
      <div
        className="hero-gradient relative h-[78vh] min-h-[520px] overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, #0B1B2B 0%, #0B5FFF 35%, #1e3a8a 65%, #0B1B2B 100%)",
          backgroundSize: "250% 100%",
        }}
      >
        {/* Blobs decorativos */}
        <div className="pointer-events-none absolute -top-24 -left-24 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-30"
             style={{ background: "radial-gradient(circle at 30% 30%, #3b82f6, transparent 60%)" }} />
        <div className="pointer-events-none absolute -bottom-24 -right-24 w-[40vw] h-[40vw] rounded-full blur-3xl opacity-30"
             style={{ background: "radial-gradient(circle at 70% 70%, #06b6d4, transparent 60%)" }} />

        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto h-full px-4 flex flex-col items-center justify-center text-center text-white">
          <h1 className="hero-title tracking-hero font-extrabold leading-tight text-[9vw] md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="hero-subtitle mt-5 text-lg md:text-2xl max-w-3xl">
            {subtitle}
          </p>

          <div className="hero-cta mt-8">
            <a
              href="/propuestas"
              className="btn-ghost-ring inline-flex items-center rounded-full border border-white/60 px-6 py-3 text-base md:text-lg font-semibold hover:bg-white/10"
            >
              Conoce el Programa
            </a>
          </div>
        </div>

        {/* Sombra inferior */}
        <div className="hero-bottom-shadow absolute inset-x-0 bottom-0 h-40 opacity-0"
             style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.35) 100%)" }} />
      </div>
    </section>
  );
}
