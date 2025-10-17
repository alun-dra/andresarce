import Layout from "./ui/Layout";
import Hero from "./sections/Hero";
import Propuestas from "./sections/Propuestas";
import VozEnAccion from "./sections/VozEnAccion";
import Redes from "./sections/Redes";

import SEO from "./seo/SEO";
import { homeSEO } from "./seo/homeSeo";

export default function App() {
  return (
    <Layout>
      <SEO {...homeSEO} />
      <Hero />
      <Propuestas />
      <VozEnAccion />
      <Redes />
    </Layout>
  );
}
