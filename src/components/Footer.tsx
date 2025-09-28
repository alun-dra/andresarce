export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#14294B_0%,#182D56_100%)] text-white/80">
      <div className="container-default py-14">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          {/* Marca + descripción */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="Partido Nacional Libertario — Logo"
                className="h-10 w-10 rounded-md ring-1 ring-white/20 object-contain bg-white"
              />
              <div>
                <div className="text-white font-black leading-none">Andrés Arce</div>
                <div className="text-xs text-white/60">Candidato a Diputado • Distrito 12</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Compromiso con libertad económica, seguridad y transparencia. Conversemos tus ideas para el distrito.
            </p>
          </div>

          {/* Navegación */}
          <nav className="md:col-span-3" aria-label="Navegación del sitio">
            <h4 className="text-sm font-semibold text-white">Navegación</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-[#F6A919]" href="#propuestas">Propuestas</a></li>
              <li><a className="hover:text-[#F6A919]" href="#agenda">Agenda</a></li>
              
              {/* <li><a className="hover:text-[#F6A919]" href="#accion">Tu voz</a></li> */}
            </ul>
          </nav>

          {/* Súmate */}
          <div className="md:col-span-4" id="participa">
            <h4 className="text-sm font-semibold text-white">Súmate</h4>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                required
                className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#F6A919]"
                placeholder="Tu correo"
              />
              <button
                className="rounded-full bg-[#F6A919] px-4 py-2 text-sm font-semibold text-[#14294B] shadow hover:bg-[#E79E16] focus:outline-none focus:ring-2 focus:ring-[#F6A919]/40"
                type="submit"
              >
                Enviar
              </button>
            </form>
            <p className="mt-3 text-xs text-white/60">
              Recibirás novedades y actividades de la campaña. Puedes cancelar cuando quieras.
            </p>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-xs text-white/60">
          <ul className="flex flex-wrap gap-4">
            <li><a href="https://www.instagram.com/andres_arce_cand_diputado_d12/" className="hover:text-[#F6A919]">Instagram</a></li>
            <li><a href="#" className="hover:text-[#F6A919]">TikTok</a></li>
            <li><a href="https://x.com/andres1arce?lang=es" className="hover:text-[#F6A919]">X (Twitter)</a></li>
          </ul>
          <div>© {new Date().getFullYear()} Comando Andrés Arce. Todos los derechos reservados.</div>
        </div>
      </div>
    </footer>
  )
}
