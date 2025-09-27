import { Section, Container } from '../ui/primitives'
export default function Transparencia(){
return (
<Section id="transparencia" className="bg-pure">
<Container className="grid items-center gap-10 md:grid-cols-2">
<div className="order-2 md:order-1">
<h2 className="text-3xl font-black tracking-tight text-coal sm:text-4xl">Una campaña transparente</h2>
<p className="mt-3 text-coal/70">Publicamos gastos, donaciones y proveedores para que sepas cómo usamos cada peso. Además, todos los compromisos quedarán disponibles con seguimiento de avance.</p>
<div className="mt-6 flex flex-wrap gap-3">
<a href="#" className="rounded-full bg-coal px-5 py-3 text-sm font-semibold text-pure hover:bg-coal/80">Ver informe trimestral</a>
<a href="#" className="rounded-full bg-mist px-5 py-3 text-sm font-semibold text-coal hover:bg-mist/80">Cómo donar</a>
</div>
</div>
<div className="order-1 md:order-2">
<div className="mx-auto aspect-[16/12] w-full max-w-xl rounded-3xl bg-mist p-6 shadow">
<div className="flex h-full items-center justify-center text-8xl">♻️</div>
</div>
</div>
</Container>
</Section>
)
}