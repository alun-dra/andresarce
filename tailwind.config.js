// tailwind.config.js
export default {
  content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0B1B2B",     // azul oscuro institucional
          secondary: "#0B5FFF",   // azul brillante
          accent: "#38bdf8",      // celeste fresco
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
