// src/components/CivicBg.tsx
import { useRef } from 'react'

/**
 * Fondo institucional sobrio:
 * Bloques diagonales, sin animaciones.
 * Paleta Chile: #1B191A (coal), #182D56 (navy), #FBA931 (sun).
 * Ahora el NAVY es el fondo principal, y el SUN queda como acento secundario.
 */
export default function CivicBg({ className = '' }: { className?: string }) {
  const root = useRef<HTMLDivElement | null>(null)

  return (
    <div
      ref={root}
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden
      style={
        {
          ['--coal' as any]: '#1B191A',
          ['--navy' as any]: '#182D56',
          ['--navy-650' as any]: '#20366D',
          ['--sun' as any]: '#FBA931',
        } as React.CSSProperties
      }
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Viñeta sutil para “peso institucional” */}
          <radialGradient id="vignette" cx="50%" cy="40%" r="80%">
            <stop offset="0%" stopColor="rgba(0,0,0,0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.18)" />
          </radialGradient>

          {/* Gradiente cálido SUN */}
          <linearGradient id="sunSoft" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FBA931" />
            <stop offset="100%" stopColor="#d88a1e" />
          </linearGradient>

          {/* Gradiente profundo NAVY */}
          <linearGradient id="navySoft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--navy)" />
            <stop offset="100%" stopColor="var(--navy-650)" />
          </linearGradient>
        </defs>

        {/* Fondo principal NAVY */}
        <rect
          x="0"
          y="0"
          width="1440"
          height="800"
          fill="url(#navySoft)"
          opacity="0.95"
        />

        {/* Bloque COAL superior izquierdo (diagonal limpia) */}
        <path
          d="M0,0 L520,0 L360,160 L0,260 Z"
          fill="var(--coal)"
          opacity="0.95"
        />

        {/* Gran bloque SUN derecho (acento) */}
        <path
          d="M1440,0 L1440,800 L960,800 L1100,420 L1440,280 Z"
          fill="url(#sunSoft)"
          opacity="0.96"
        />

        <rect
          x="-40"
          y="680"               // ⬅️ más abajo
          width="1520"
          height="10"            // ⬅️ más delgada
          fill="var(--sun)"      // ⬅️ ahora amarilla, no azul
          opacity="0.35"         // ⬅️ muy suave
        />


        {/* Viñeta global */}
        <rect x="0" y="0" width="1440" height="800" fill="url(#vignette)" />
      </svg>
    </div>
  )
}
