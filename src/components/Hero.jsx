import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const root = useRef(null);
  const spotlightRef = useRef(null);

  // split por PALABRAS (más legible que por caracteres)
  const splitWords = (text) =>
    text.split(/(\s+)/).map((w, i) =>
      w.trim() ? (
        <span
          key={i}
          className="inline-block align-baseline will-change-transform origin-bottom"
          data-word
        >
          {w}
        </span>
      ) : (
        <span key={i}>&nbsp;</span>
      )
    );

  // puedes resaltar palabras con <em>..</em>
  const title = useMemo(
    () =>
      splitWords(
        "Un Chile más justo, cercano y honesto"
      ),
    []
  );
  const subtitle = useMemo(
    () =>
      splitWords(
        "Propuestas concretas para tu comuna y tu región."
      ),
    []
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Gradiente en movimiento
      gsap.to(".hero-gradient", {
        backgroundPosition: "200% 0%",
        duration: 22,
        ease: "none",
        repeat: -1,
      });

      // Rejilla sutil: parpadeo lento
      gsap.to(".hero-grid", {
        opacity: 0.25,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Entrada de palabras (título)
      gsap.from("[data-hero-title] [data-word]", {
        yPercent: 120,
        skewY: 6,
        opacity: 0,
        stagger: 0.035,
        duration: 0.75,
        ease: "power3.out",
      });

      // Entrada de palabras (subtítulo)
      gsap.from("[data-hero-subtitle] [data-word]", {
        yPercent: 120,
        opacity: 0,
        stagger: 0.02,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
      });

      // CTA
      gsap.from(".hero-cta", {
        y: 16,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.45,
      });

      // Pulso suave del botón
      gsap.to(".hero-cta", {
        boxShadow: "0 0 0 0 rgba(255,255,255,0.25)",
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Flecha animada del botón
      gsap.to(".hero-cta .chev", {
        x: 6,
        duration: 0.9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.7,
      });

      // Sombra inferior con scroll
      gsap.to(".hero-bottom-shadow", {
        opacity: 1,
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Spotlight que sigue el mouse
      const onMove = (e) => {
        if (!spotlightRef.current) return;
        const r = root.current.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        gsap.to(spotlightRef.current, {
          x,
          y,
          duration: 0.6,
          ease: "power3.out",
        });
      };
      root.current.addEventListener("mousemove", onMove);

      return () => {
        root.current?.removeEventListener("mousemove", onMove);
      };
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative">
      {/* FONDO: gradiente animado + rejilla + blobs + spotlight */}
      <div
        className="hero-gradient relative h-[80vh] min-h-[560px] overflow-hidden"
        style={{
          background:
            "linear-gradient(120deg, #0B1B2B 0%, #0B5FFF 35%, #1e3a8a 65%, #0B1B2B 100%)",
          backgroundSize: "250% 100%",
        }}
      >
        {/* Rejilla sutil (diagonal) */}
        <div
          className="hero-grid pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(115deg, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(-115deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            backgroundPosition: "0 0, 11px 11px",
          }}
        />

        {/* Blobs */}
        <div
          className="pointer-events-none absolute -top-24 -left-24 w-[48vw] h-[48vw] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(59,130,246,.9), transparent 60%)",
          }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-24 w-[48vw] h-[48vw] rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(circle at 70% 70%, rgba(6,182,212,.9), transparent 60%)",
          }}
        />

        {/* Spotlight */}
        <div
          ref={spotlightRef}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,.18) 0%, rgba(255,255,255,0) 60%)",
            mixBlendMode: "soft-light",
          }}
        />

        {/* CONTENIDO */}
        <div className="relative z-10 max-w-7xl mx-auto h-full px-4 flex flex-col items-center justify-center text-center text-white">
          {/* Título con outline + acentos */}
          <h1
            data-hero-title
            className="tracking-hero font-extrabold leading-[0.95] text-[9vw] md:text-7xl lg:text-8xl drop-shadow-[0_8px_24px_rgba(0,0,0,.25)]"
          >
            {/* Para resaltar una palabra con gradiente, envuélvela en <span className="accent">Palabra</span> */}
            <span className="relative">
              {title.slice(0, 3)}
            </span>{" "}
            <span className="relative accent bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-white">
              {title.slice(3, 4)}
            </span>{" "}
            <span className="relative">{title.slice(4)}</span>
          </h1>

          {/* Subtítulo */}
          <p
            data-hero-subtitle
            className="mt-6 text-lg md:text-2xl max-w-3xl text-white/90"
          >
            {subtitle}
          </p>

          {/* CTA */}
          <div className="hero-cta mt-9">
            <a
              href="/propuestas"
              className="inline-flex items-center gap-2 rounded-full border border-white/70 px-7 py-3 text-base md:text-lg font-semibold
                         bg-white/0 hover:bg-white/10 transition-colors"
              style={{
                boxShadow:
                  "0 0 0 6px rgba(255,255,255,0.08), inset 0 0 24px rgba(255,255,255,0.12)",
                backdropFilter: "blur(4px)",
              }}
            >
              Conoce el Programa
              <svg
                className="chev h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Indicador scroll */}
          <div className="mt-10 hidden md:block">
            <div className="flex flex-col items-center text-white/70">
              <span className="text-sm">Desliza</span>
              <svg
                className="mt-2 h-6 w-6 animate-bounce"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Sombra inferior */}
        <div
          className="hero-bottom-shadow absolute inset-x-0 bottom-0 h-40 opacity-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.35) 100%)",
          }}
        />
      </div>
    </section>
  );
}
