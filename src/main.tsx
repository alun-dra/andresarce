import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initAnalytics, trackPageview } from './lib/analytics'

if (import.meta.env.PROD) {
  initAnalytics(import.meta.env.VITE_GA_ID as string | undefined);
  // landing de una sola página: dispara un page_view al cargar
  window.addEventListener('load', () => trackPageview(window.location.pathname));
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
