export default function Footer() {
  return (
    <footer className="bg-coal py-14 text-pure/80">
      <div className="container-default grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sun text-coal font-black">AA</div>
          <p className="mt-4 text-sm leading-relaxed">
            Andrés Arce — Candidato a Diputado D12. Conversemos tus ideas para la comuna.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-pure">Navegación</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:underline" href="#propuestas">Propuestas</a></li>
            <li><a className="hover:underline" href="#agenda">Agenda</a></li>
            <li><a className="hover:underline" href="#transparencia">Transparencia</a></li>
            <li><a className="hover:underline" href="#participa">Participa</a></li>
          </ul>
        </div>
        <div id="participa">
          <h4 className="text-sm font-semibold text-pure">Súmate</h4>
          <form className="mt-3 flex gap-2">
            <input 
              className="w-full rounded-full border border-pure/10 bg-pure/10 px-4 py-2 text-sm text-pure placeholder:text-pure/50 focus:outline-none focus:ring-2 focus:ring-sun" 
              placeholder="Tu correo" 
            />
            <button className="rounded-full bg-sun px-4 py-2 text-sm font-semibold text-coal hover:bg-sun/80">Enviar</button>
          </form>
          <p className="mt-3 text-xs text-pure/60">
            Recibirás novedades y actividades de la campaña. Puedes cancelar cuando quieras.
          </p>
        </div>
      </div>
      <div className="container-default mt-10 border-t border-pure/10 pt-6 text-xs text-pure/60">
        © {new Date().getFullYear()} Comando Andrés Arce. Todos los derechos reservados.
      </div>
    </footer>
  )
}
