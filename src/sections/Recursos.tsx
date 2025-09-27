import { Section, Container } from '../ui/primitives'
const recursos = [
{ title: 'Cabildo en Puente Alto', src: 'Evento', text: 'Súmate al diálogo de este sábado 11 a las 10:00.' },
{ title: 'Voluntariado D12', src: 'Formulario', text: 'Inscríbete y aporta desde tu comuna.' },
{ title: 'Plan Seguridad Vecinal', src: 'Documento', text: 'Revisa el resumen ejecutivo y comenta.' },
]
export default function Recursos(){
return (
<Section id="agenda" className="bg-mist/30">
<Container>
<div className="flex items-end justify-between">
<div>
<p className="text-xs font-black uppercase tracking-widest text-navy">Participa</p>
<h2 className="mt-1 text-3xl font-black tracking-tight text-coal sm:text-4xl">Desde el territorio</h2>
</div>
<div className="hidden gap-2 md:flex">
<button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-mist">‹</button>
<button className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-mist">›</button>
</div>
</div>
<div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
{recursos.map(r => (
<a key={r.title} href="#" className="group block overflow-hidden rounded-2xl bg-pure shadow transition hover:-translate-y-1">
<div className="aspect-[4/3] w-full bg-mist" />
<div className="p-5">
<h3 className="text-lg font-bold text-coal">{r.title}</h3>
<p className="mt-1 line-clamp-2 text-sm text-coal/70">{r.text}</p>
<span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-coal/60">{r.src} →</span>
</div>
</a>
))}
</div>
</Container>
</Section>
)
}