// src/components/footer/Footer.jsx
import redes from "../../data/redes";

export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3 items-start">
          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-brand-dark mb-2">Contacto</h4>
            <a
              href="mailto:correo@andresarcediputado.cl"
              className="text-sm text-gray-700 hover:text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary rounded"
            >
              correo@andresarcediputado.cl
            </a>
          </div>

          {/* Redes */}
          <div>
            <h4 className="font-semibold text-brand-dark mb-2">Síguenos</h4>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-700">
              {redes.map((r) => (
                <li key={r.href}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-secondary rounded"
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-500 md:text-right">
            © {new Date().getFullYear()} Andrés Arce
          </div>
        </div>
      </div>
    </footer>
  );
}
