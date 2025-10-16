import { Section, Container } from '../ui/primitives'
// import posterImg from '../assets/andresarce_cropped.png'
// import posterImg800 from '../assets/andresarce_cropped_800.png'
import { Shield, Users, Briefcase, BarChart3 } from 'lucide-react'

export default function VozEnAccion() {
  return (
    <Section id="accion" className="relative overflow-hidden bg-[linear-gradient(180deg,#14294B_0%,#182D56_100%)]">
      <Container className="relative">
        <div className="grid items-start gap-10 md:grid-cols-12">
          {/* Imagen */}
          <figure className="relative md:col-span-5">
  <div className="relative w-full overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10 bg-[#14294B]">
    <img
      src="/assets/andresarce_cropped.png"
      alt="Afiche de campaña de Andrés Arce, candidato a diputado por el Distrito 12"
      className="w-full h-auto mx-auto block scale-[1.08] object-cover [object-position:50%_center]"
      loading="lazy"
      decoding="async"
    />

    {/* Etiqueta superior */}
    <figcaption className="absolute left-4 top-4">
      <span className="inline-flex items-center rounded-full bg-[#F6A919] px-3 py-1 text-[11px] font-semibold tracking-wide text-[#14294B] shadow">
        DISTRITO 12
      </span>
    </figcaption>

    {/* Línea base */}
    <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-[#F6A919]" />
  </div>
</figure>



          {/* Texto */}
          <div className="md:col-span-7 text-white">
            <header className="text-center md:text-left">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Tu voz en acción
              </h2>
              <p className="mt-2 text-sm font-semibold text-[#F6A919]">
                Liderazgo serio, cercano y decidido.
              </p>
            </header>

            {/* Manifiesto */}
            <div className="relative mt-8 rounded-xl bg-white/5 p-8 shadow-lg ring-1 ring-white/10">
              <p className="text-lg leading-relaxed text-white/90">
                En el <span className="font-extrabold text-[#F6A919]">Distrito 12</span> estamos cansados de lo mismo.{' '}
                <span className="font-bold text-white">Queremos seguridad, oportunidades y respeto.</span>
              </p>

              <p className="mt-4 text-lg leading-relaxed text-white/80">
                <span className="font-bold text-[#F6A919]">Andrés Arce</span> no promete desde un escritorio.
                Es emprendedor, conoce el sacrificio y ha estado en terreno junto a los vecinos de{' '}
                <span className="font-semibold">La Florida, Puente Alto, San José de Maipo, Pirque y La Pintana</span>.
              </p>

              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Sabemos lo que duele la <span className="font-bold text-[#F6A919]">delincuencia</span> y cómo el{' '}
                <span className="font-bold text-[#F6A919]">narcotráfico</span> rompe familias y barrios.{' '}
                <span className="italic text-white">Sí se puede recuperar la paz.</span>
              </p>

              {/* Cita remate */}
              <blockquote className="mt-6 border-l-4 border-[#F6A919]/90 pl-4 text-[22px] font-black leading-snug text-white">
                ¡Es hora de levantarnos! <br />
                Construyamos un <span className="text-[#F6A919]">Distrito 12 seguro, digno y con futuro</span>.
              </blockquote>

              {/* Firma + CTAs */}
              <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <div className="text-xs text-white/70">
                  <div className="font-semibold text-white">Andrés Arce</div>
                  <div>Diputado • Distrito 12</div>
                </div>

                <div className="hidden h-6 w-px bg-white/15 sm:block" />

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#propuestas"
                    className="inline-flex items-center justify-center rounded-full bg-[#F6A919] px-5 py-2 text-sm font-semibold text-[#14294B] shadow hover:bg-[#E79E16] focus:outline-none focus:ring-2 focus:ring-[#F6A919]/40"
                  >
                    Ver propuestas
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

/* ------- data minimal y tipado local ------- */
const items = [
  {
    title: 'Seguridad sin excusas',
    desc: 'Coordinación real con barrios y fiscalización efectiva.',
    icon: Shield,
  },
  {
    title: 'Comunidad primero',
    desc: 'Cabildos y equipos territoriales en cada comuna.',
    icon: Users,
  },
  {
    title: 'Trabajo y emprendimiento',
    desc: 'Menos trabas, más oportunidades locales.',
    icon: Briefcase,
  },
  {
    title: 'Rendición de cuentas',
    desc: 'Informes públicos y metas claras cada trimestre.',
    icon: BarChart3,
  },
] as const
