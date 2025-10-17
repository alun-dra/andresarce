import { useEffect } from "react";

type MetaMap = Record<string, string | undefined>;
type JsonLd = object | object[];

function upsertMetaByName(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
  noIndex?: boolean;
  og?: MetaMap;
  twitter?: MetaMap;
  jsonLd?: JsonLd; // objeto o array @graph
};

export default function SEO({
  title,
  description,
  canonical,
  noIndex,
  og = {},
  twitter = {},
  jsonLd,
}: SEOProps) {
  useEffect(() => {
    const prevTitle = document.title;

    // <title>
    if (title) document.title = title;

    // description
    if (description) upsertMetaByName("description", description);

    // robots
    if (noIndex) {
      upsertMetaByName("robots", "noindex, nofollow");
    }

    // canonical
    if (canonical) upsertLink("canonical", canonical);

    // Open Graph
    Object.entries(og).forEach(([k, v]) => {
      if (v) upsertMetaByProperty(`og:${k}`, v);
    });

    // Twitter
    Object.entries(twitter).forEach(([k, v]) => {
      if (v) upsertMetaByName(`twitter:${k}`, v);
    });

    // JSON-LD (reemplaza el anterior que haya puesto este componente)
    let scriptEl = document.getElementById("__seo_jsonld__") as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.type = "application/ld+json";
        scriptEl.id = "__seo_jsonld__";
        document.head.appendChild(scriptEl);
      }
      scriptEl.text = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    // cleanup: restaura el título previo si este componente se desmonta
    return () => {
      if (title) document.title = prevTitle;
      if (noIndex) upsertMetaByName("robots", "index, follow");
    };
  }, [title, description, canonical, noIndex, og, twitter, jsonLd]);

  return null;
}
