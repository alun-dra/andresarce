// src/pages/Contacto.jsx
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gray-50">
     {/* HERO contacto */}
<section className="relative overflow-hidden bg-gradient-to-r from-brand-primary via-blue-600 to-indigo-800">
  {/* Overlay de textura sutil */}
  <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('/noise.svg')]" />

  <div className="max-w-7xl mx-auto px-4 py-24 text-center relative z-10">
    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-lg">
      Conversemos
    </h1>
    <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">
      Escríbenos tus ideas, dudas o propuestas. Tu mensaje nos ayuda a construir un Chile más justo.
    </p>
  </div>
</section>


      {/* FORM CARD */}
      <section className="-mt-12 pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative rounded-3xl bg-white shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">
              Envíanos un mensaje
            </h2>

            <form
              className="grid gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("¡Gracias por tu mensaje!");
              }}
            >
              <div className="grid gap-6 md:grid-cols-2">
                <InputField id="nombre" label="Nombre" placeholder="Tu nombre completo" required />
                <InputField id="correo" label="Correo electrónico" placeholder="ejemplo@correo.com" type="email" required />
              </div>

              <InputField id="asunto" label="Asunto" placeholder="Motivo de tu mensaje" />

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows={6}
                  required
                  placeholder="Escribe tu mensaje aquí…"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-brand-secondary px-8 py-3 text-white font-semibold shadow-md hover:opacity-90 transition"
              >
                Enviar mensaje
                <PaperAirplaneIcon className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* INFO CARDS con iconos bonitos */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <InfoCard
              icon={<MapPinIcon className="h-6 w-6 text-brand-secondary" />}
              title="Dirección"
              lines={["Av. Ejemplo 123, Santiago, Chile"]}
            />
            <InfoCard
              icon={<EnvelopeIcon className="h-6 w-6 text-brand-secondary" />}
              title="Correo"
              lines={["contacto@andresarcediputado.cl"]}
            />
            <InfoCard
              icon={<PhoneIcon className="h-6 w-6 text-brand-secondary" />}
              title="Teléfono"
              lines={["+56 9 1234 5678"]}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function InputField({ id, label, placeholder, type = "text", required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-secondary"
      />
    </div>
  );
}

function InfoCard({ icon, title, lines }) {
  return (
    <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-6 hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50">
          {icon}
        </div>
        <h3 className="font-semibold text-brand-dark">{title}</h3>
      </div>
      <div className="mt-3 text-gray-600 text-sm leading-relaxed">
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>
    </div>
  );
}
