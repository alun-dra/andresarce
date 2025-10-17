// GA4 simple para Vite/React (sin Helmet)
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function initAnalytics(measurementId?: string) {
  if (!measurementId) return;
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "undefined") return; // evitar doble init


  // Carga gtag.js
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(s);

  // Inicializa dataLayer y config
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) { window.dataLayer.push(args); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", measurementId, {
    anonymize_ip: true,
    send_page_view: false // lo haremos manual para SPA
  });
}

export function trackPageview(path: string) {
  const id = import.meta.env.VITE_GA_ID as string | undefined;
  if (!window.gtag || !id) return;
  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: path,
    page_title: document.title,
    send_to: id,
  });
}

export function trackEvent(
  name: string,
  params?: Record<string, any>
) {
  if (!window.gtag) return;
  window.gtag("event", name, params || {});
}
