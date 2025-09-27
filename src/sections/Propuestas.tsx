import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Section, Container } from '../ui/primitives'

/* ---------- Util ---------- */
const slug = (s: string) =>
  s.toLowerCase().trim().replace(/\s+/g, '-').replace(/[^a-z0-9\-]/g, '')

/* ---------- Tipos ---------- */
type Item = { title: string; desc: string; bullets: string[] }
type CardProps = { item: Item; index: number; className?: string }

/* ---------- Datos ---------- */
const data: Item[] = [
  {
    title: 'Bajar impuestos',
    desc: 'Alivio tributario a familias y pymes para reactivar el empleo.',
    bullets: ['IVA menor en servicios básicos', 'Tramo Pyme simplificado', 'Regla fiscal estricta del gasto'],
  },
  {
    title: 'Mayor libertad económica',
    desc: 'Menos trabas, más inversión y competencia.',
    bullets: ['Permisos en línea y plazos ciertos', 'Eliminar barreras de entrada', 'Protección a consumidores y libre competencia'],
  },
  {
    title: 'Control de fronteras',
    desc: 'Resguardo efectivo del límite y pasos no habilitados.',
    bullets: ['Tecnología y patrullaje permanente', 'Biometría obligatoria', 'Coordinación con FF.AA. y Carabineros'],
  },
  {
    title: 'Migración irregular',
    desc: 'Regularización por ley y expulsión de quienes incumplan.',
    bullets: ['Expulsión administrativa efectiva', 'Delitos → expulsión prioritaria', 'Cooperación internacional en retornos'],
  },
  {
    title: 'Orden y seguridad / Gasto político',
    desc: 'Estado al servicio de la gente, no de la burocracia.',
    bullets: ['Más patrullaje y fiscalización territorial', 'Reasignar desde altos cargos a servicios', 'Transparencia y compras públicas abiertas'],
  },
]

/* ---------- UI bits ---------- */
function NumberBadge({ n }: { n: number }) {
  return (
    <span
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FBA931] text-[#1B191A] text-sm font-extrabold
                 ring-2 ring-white/50 shadow-[inset_0_-1px_0_rgba(0,0,0,.15)]"
      aria-hidden
    >
      {n}
    </span>
  )
}

function CheckItem({ children }: { children: string }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 flex-none" fill="currentColor" aria-hidden>
        <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
      </svg>
      <span className="text-white/90">{children}</span>
    </li>
  )
}

/* ---------- Card ---------- */
function Card({ item, index, className = '' }: CardProps) {
  const id = slug(item.title)

  return (
    <article
      id={id}
      className={[
        'group relative h-full rounded-2xl overflow-hidden ring-1 ring-white/10',
        'bg-[#182D56] text-white shadow-sm transition',
        'hover:shadow-lg hover:-translate-y-0.5',
        className,
      ].join(' ')}
    >
      {/* accent bar */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#FBA931] via-amber-300 to-[#FBA931] opacity-80" />

      <div className="p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <NumberBadge n={index + 1} />
          <h3 className="text-lg sm:text-xl font-extrabold leading-snug">{item.title}</h3>
        </div>

        <p className="mt-2 text-sm text-white/85">{item.desc}</p>

        <ul className="mt-4 grid gap-2 text-[#FBA931]">
          {item.bullets.map((b) => (
            <CheckItem key={b}>{b}</CheckItem>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-3">
          <a
            href={`/propuestas#${id}`}
            className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white
                       ring-1 ring-white/20 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={`Ver detalle de la propuesta: ${item.title}`}
          >
            Ver detalle
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
            </svg>
          </a>
          <a
            href={`/propuestas#${id}`}
            className="text-sm font-semibold text-white/75 hover:text-white underline/20 hover:underline"
          >
            Ver indicadores
          </a>
        </div>
      </div>

      {/* soft glow on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
        <div className="absolute -inset-8 rounded-[28px] bg-[radial-gradient(40%_30%_at_30%_0%,rgba(251,169,49,.15),transparent),radial-gradient(40%_30%_at_90%_0%,rgba(255,255,255,.06),transparent)]" />
      </div>
    </article>
  )
}

/* ---------- Sección ---------- */
export default function Propuestas() {
  const row1Ref = useRef<HTMLDivElement | null>(null)
  const row2Ref = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const animate = (el: HTMLDivElement | null) => {
      const nodes = el ? Array.from(el.children) : []
      if (!nodes.length) return
      gsap.fromTo(
        nodes,
        { y: 24, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.5,
          ease: 'power3.out',
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: 'top 85%' },
        }
      )
    }
    const ctx = gsap.context(() => {
      animate(row1Ref.current)
      animate(row2Ref.current)
    })
    return () => ctx.revert()
  }, [])

  return (
    <Section
      id="propuestas"
      aria-labelledby="propuestas-heading"
      className="
        relative
        bg-white
        before:absolute before:inset-0 before:-z-10
        before:bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(24,45,86,0.06),transparent)]
        after:absolute after:inset-0 after:-z-10 after:pointer-events-none
        after:bg-[linear-gradient(to_bottom,transparent_0,transparent_30%,rgba(24,45,86,0.03)_31%,transparent_32%)]
        "
    >
      <Container>
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-wide
                        border-[#182D56]/15 text-[#182D56]/70">
            Agenda legislativa • 2025
          </p>
          <h2 id="propuestas-heading" className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-[#1B191A]">
            Propuestas clave
          </h2>
          <p className="mt-2 text-[#1B191A]/70">
            Un plan concreto y medible para mejorar la calidad de vida en el Distrito 12.
          </p>

          {/* quick nav chips */}
          <nav className="mt-4 flex flex-wrap justify-center gap-2">
            {data.map((d) => (
              <a
                key={d.title}
                href={`#${slug(d.title)}`}
                className="rounded-full border px-3 py-1 text-xs font-semibold
                           border-[#182D56]/15 text-[#182D56]/70 hover:text-[#182D56] hover:border-[#182D56]/30"
              >
                {d.title}
              </a>
            ))}
          </nav>
        </header>

        {/* Fila 1: 3 tarjetas */}
        <div
          ref={row1Ref}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl mx-auto items-stretch"
        >
          {data.slice(0, 3).map((item, i) => (
            <Card key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Fila 2: 2 tarjetas centradas */}
        <div
          ref={row2Ref}
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-4xl mx-auto items-stretch"
        >
          {data.slice(3).map((item, i) => (
            <Card key={item.title} item={item} index={i + 3} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
