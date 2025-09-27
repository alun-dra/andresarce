import Layout from './ui/Layout'
import Hero from './sections/Hero'
import Propuestas from './sections/Propuestas'
import VozEnAccion from './sections/VozEnAccion'
import Transparencia from './sections/Transparencia'
import Recursos from './sections/Recursos'
export default function App(){
return (
<Layout>
<Hero />
<Propuestas />
<VozEnAccion />
<Transparencia />
<Recursos />
</Layout>
)
}