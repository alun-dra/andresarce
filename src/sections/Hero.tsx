// src/sections/Hero.tsx
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CivicBg from '../components/CivicBg'      // sin extensión
import heroImg from '../assets/principal.jpg'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const quoteRef = useRef<HTMLDivElement | null>(null)
  const metaRef  = useRef<HTMLParagraphElement | null>(null)
  const ctaRef   = useRef<HTMLDivElement | null>(null)
  const cardRef  = useRef<HTMLDivElement | null>(null)
  const chipsRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(titleRef.current, { y: 18, autoAlpha: 0, duration: 0.45 })
        .from(quoteRef.current, { y: 14, autoAlpha: 0, duration: 0.45 }, '-=0.18')
        .from(metaRef.current,  { y: 10, autoAlpha: 0, duration: 0.35 }, '-=0.18')

      // ⚡️ usar arrays reales + fromTo para garantizar que terminen visibles
      const chips = chipsRef.current ? Array.from(chipsRef.current.children) : []
      const ctas  = ctaRef.current   ? Array.from(ctaRef.current.children)   : []

      if (chips.length) {
        tl.fromTo(chips, { y: 8, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.32, stagger: 0.06 }, '-=0.18')
      }
      if (ctas.length) {
        tl.fromTo(ctas, { y: 10, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.34, stagger: 0.08 }, '-=0.10')
      }

      tl.from(cardRef.current, { y: 16, autoAlpha: 0, duration: 0.45 }, '-=0.18')
    })
    return () => ctx.revert()
  }, [])

  return (
    <section id="inicio" className="relative overflow-hidden pt-24 md:pt-28 min-h-[85vh]">
      <CivicBg />

      {/* Veil para contraste en pantallas pequeñas */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[55vh] w-[60vw] mix-blend-multiply"
        style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(27,25,26,.18), rgba(27,25,26,0) 60%)' }}
      />

      <div className="container-default grid items-center gap-12 md:grid-cols-2">
        {/* ⬇️ Asegura estar por encima del fondo */}
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white shadow-sm">
            Diputado · Distrito 12
          </span>

          <h1
            ref={titleRef}
            className="mt-4 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl"
          >
            Andrés{' '}
            <span className="relative text-[#FBA931]">
              Arce
              <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-[#FBA931]" />
            </span>
          </h1>

          <div
            ref={quoteRef}
            className="mt-6 rounded-xl border border-white/15 bg-white/10 p-5 text-white/90 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,.15)]"
          >
            <p className="text-lg italic leading-relaxed">
              “La Patria no se destruye por unos pocos que la atacan; la Patria
              se destruye porque no la defienden quienes dicen amarla.”
            </p>
          </div>

          <p ref={metaRef} className="mt-4 max-w-xl text-white/85">
            Candidato a <strong>Diputado por el Distrito 12</strong>: Puente Alto, La Florida, La Pintana,
            Pirque y San José de Maipo.
          </p>

          <div ref={chipsRef} className="mt-4 flex flex-wrap gap-2">
            {['Seguridad', 'Salud', 'Transporte', 'Oportunidades'].map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <div ref={ctaRef} className="mt-7 flex flex-wrap items-center gap-4">
            {/* Ver propuestas: blanco + bordes/hover/focus sólidos */}
            <a
                href="#propuestas"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[#182D56] shadow-lg shadow-black/20 ring-1 ring-black/5 hover:bg-white/95 active:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white/60"
            >
                <svg
                className="-ml-0.5 h-5 w-5 text-[#182D56] transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                >
                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                </svg>
                Ver propuestas
            </a>

            {/* Únete: secundario “glass” con borde y foco claros */}
            <a
                href="#participa"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-[2px] hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
                Únete a la campaña
            </a>

            {/* Donaciones: SERVEL en nueva pestaña, icono de enlace externo */}
            <a
                href="https://aportes.servel.cl/servel-aportes/inicio.xhtml?preloadId=Q0FOXzg5NQ=="
                target="_blank"
                rel="noopener noreferrer external"
                aria-label="Donaciones — se abre en un sitio externo (SERVEL)"
                className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-red-700 active:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-300"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                fill="currentColor" className="-ml-0.5 h-5 w-5" aria-hidden="true"
                >
                <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42L17.59 5H14V3z" />
                <path d="M5 5h5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-5h-2v5H5V5z" />
                </svg>
                Donaciones
            </a>
            </div>



        </div>

        <div className="relative">
          <div ref={cardRef} className="mx-auto w-full max-w-md">
            <figure className="relative overflow-hidden rounded-3xl ring-1 ring-black/10 shadow-2xl shadow-black/40">
              <img src={heroImg} alt="Andrés Arce" className="h-[620px] w-full object-cover md:h-[660px]" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
