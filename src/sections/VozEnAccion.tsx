import { useState } from 'react'
import { Section, Container } from '../ui/primitives'
const slides = [
{ title:'Escuchar', text:'Cabildos y diálogos barriales mensuales.', emoji:'👂' },
{ title:'Conectar', text:'Equipo territorial por comuna para respuestas rápidas.', emoji:'🤝' },
{ title:'Proponer', text:'Plataforma digital de iniciativas ciudadanas del D12.', emoji:'💡' },
{ title:'Rendir cuentas', text:'Informe público trimestral con avances y pendientes.', emoji:'📊' },
]
export default function VozEnAccion(){
const [index, setIndex] = useState(0)
const next = () => setIndex(i => (i+1)%slides.length)
const prev = () => setIndex(i => (i-1+slides.length)%slides.length)
return (
<Section id="accion" className="bg-mist/30">
<Container>
<h2 className="text-center text-3xl font-black tracking-tight text-coal sm:text-4xl">Tu voz en acción</h2>
<p className="mx-auto mt-3 max-w-2xl text-center text-coal/70">Un proceso claro para transformar ideas en resultados.</p>
<div className="relative mx-auto mt-10 grid max-w-3xl place-items-center">
<div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-pure p-8 shadow-xl">
<div className="flex h-full w-full items-center justify-center text-center transition-transform duration-300" style={{ transform:`translateX(-${index*100}%)`}}>
{slides.map(s => (
<div key={s.title} className="min-w-full">
<div className="mx-auto mb-4 text-7xl">{s.emoji}</div>
<h3 className="text-xl font-bold text-coal">{s.title}</h3>
<p className="mt-2 text-coal/70">{s.text}</p>
</div>
))}
</div>
</div>
<div className="mt-6 flex items-center justify-center gap-3">
{slides.map((_,i)=> (
<button key={i} onClick={()=>setIndex(i)} aria-label={`Ir al slide ${i+1}`} className={`h-2 w-2 rounded-full ${index===i? 'bg-coal':'bg-coal/30'}`} />
))}
</div>
<div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between">
<button onClick={prev} className="pointer-events-auto ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-pure shadow hover:bg-navy/80">‹</button>
<button onClick={next} className="pointer-events-auto mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-navy text-pure shadow hover:bg-navy/80">›</button>
</div>
</div>
</Container>
</Section>
)
}