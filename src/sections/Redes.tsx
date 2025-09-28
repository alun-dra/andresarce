// src/sections/Redes.tsx
import { Section, Container } from '../ui/primitives'
import { Instagram, ExternalLink, ArrowRight } from 'lucide-react'
import React from 'react'

/* Íconos sólidos, monocromo */
function IconTikTok(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M42 16.3c-4.2 0-8.2-2-10.6-5.3v16.2c0 6.6-5.4 11.9-12 11.9S7.4 33.8 7.4 27.2c0-6.3 4.9-11.5 11.2-11.9v6.2c-2.8.4-5 2.8-5 5.7 0 3.2 2.6 5.8 5.8 5.8s5.8-2.6 5.8-5.8V6h5.6c1.2 3.9 5 6.8 9.2 6.8V16.3Z"
      />
    </svg>
  )
}
function IconX(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <path
        fill="currentColor"
        d="M18.146 2H21l-6.53 7.46L22.5 22h-7.06l-4.93-6.35L4.84 22H2l7.07-8.07L1.5 2h7.06l4.5 5.8L18.146 2Zm-2.48 18h1.37L7.46 4h-1.4l9.606 16Z"
      />
    </svg>
  )
}

/* URLs reales aquí */
const LINKS = {
  ig: 'https://www.instagram.com/andres_arce_cand_diputado_d12/',
  tk: 'https://tiktok.com/@andresarce',
  x:  'https://x.com/andres1arce?lang=es',
}

/* Pill minimal, sin burbuja ni colorines */
type PillProps = { href: string; label: string; icon: React.ReactNode }
function Pill({ href, label, icon }: PillProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} (abrir en nueva pestaña)`}
      className="group flex items-center justify-between rounded-xl border border-[#182D56]/15 bg-white px-5 py-4 shadow-sm transition
                 hover:-translate-y-0.5 hover:border-[#F6A919] hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="text-[#182D56]/80 group-hover:text-[#F6A919]">
          {/* tamaño de icono serio, sin contenedor */}
          <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:block">{icon}</span>
        </span>
        <span className="text-sm font-semibold text-[#182D56]"> {label} </span>
      </div>
      <ExternalLink className="h-4 w-4 text-[#182D56]/40 transition group-hover:text-[#F6A919]" />
    </a>
  )
}

export default function Redes() {
  return (
    <Section id="redes" className="bg-white py-16">
      <Container>
        <div className="grid items-start gap-8 md:grid-cols-12">
          {/* Izquierda */}
          <div className="md:col-span-5">
            <h2 className="text-3xl font-black tracking-tight text-[#182D56] sm:text-4xl">
              Sígueme en redes sociales
            </h2>
            <p className="mt-2 max-w-md text-[#182D56]/80">
              Propuestas, actividades y novedades de campaña con información verificada.
            </p>

            <a
              href={LINKS.ig}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#F6A919] to-[#E79E16] px-5 py-3 text-sm font-semibold text-[#182D56] shadow-md transition
                         hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#F6A919]/40"
            >
              Seguir ahora <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Derecha */}
          <div className="md:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <Pill href={LINKS.ig} label="Instagram" icon={<Instagram />} />
              <Pill href={LINKS.tk} label="TikTok" icon={<IconTikTok />} />
              <Pill href={LINKS.x}  label="X"      icon={<IconX />} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
