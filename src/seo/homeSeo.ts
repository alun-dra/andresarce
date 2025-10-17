export const homeSEO = {
  title: "Andrés Arce — Candidato a Diputado | Libertad, Empleo y Seguridad",
  description:
    "Sitio oficial de Andrés Arce, candidato a diputado en Chile. Conoce sus propuestas en libertad económica, seguridad, empleo y transparencia. Súmate y participa.",
  canonical: "https://www.andresarce.cl/",
  og: {
    type: "website",
    site_name: "Andrés Arce",
    title: "Andrés Arce — Candidato a Diputado",
    description:
      "Conoce el programa y propuestas de Andrés Arce: libertad económica, seguridad, empleo y transparencia.",
    url: "https://www.andresarce.cl/",
    locale: "es_CL",
    image: "https://www.andresarce.cl/og/andres-arce-og.jpg",
    "image:width": "1200",
    "image:height": "630",
    "image:alt": "Retrato de Andrés Arce, candidato a diputado en Chile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Arce — Candidato a Diputado",
    description:
      "Propuestas claras para Chile: libertad económica, seguridad, empleo y transparencia.",
    image: "https://www.andresarce.cl/og/andres-arce-og.jpg",
    // site: "@andresarce",
    // creator: "@andresarce",
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Andrés Arce",
        "url": "https://www.andresarce.cl/",
        "image": "https://www.andresarce.cl/og/andres-arce-og.jpg",
        "jobTitle": "Candidato a Diputado",
        "memberOf": { "@type": "PoliticalParty", "name": "Partido Nacional Libertario" },
        "affiliation": { "@type": "Organization", "name": "Partido Nacional Libertario" },
        "areaServed": { "@type": "AdministrativeArea", "name": "Chile" },
        "address": { "@type": "PostalAddress", "addressCountry": "CL" },
        "sameAs": [
          "https://x.com/andresarce",
          "https://www.instagram.com/andresarce",
          "https://www.facebook.com/andresarce"
        ]
      },
      {
        "@type": "Organization",
        "name": "Andrés Arce",
        "url": "https://www.andresarce.cl/",
        "logo": "https://www.andresarce.cl/logo.jpg"
      },
      {
        "@type": "WebSite",
        "name": "Andrés Arce",
        "url": "https://www.andresarce.cl/",
        "inLanguage": "es-CL"
      }
    ]
  }
} as const;
