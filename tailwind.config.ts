export default {
  content: ['./index.html','./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        coal: '#1B191A', // negro carbón
        navy: '#182D56', // azul
        sun:  '#FBA931', // amarillo
        mist: '#E5E5E5', // gris
        pure: '#FFFFFF', // blanco
      },
      fontFamily: { 
        sans: ['Inter','ui-sans-serif','system-ui'] 
      },
      boxShadow: { 
        soft: '0 8px 24px rgba(2,6,23,0.08)' 
      },
    }
  },
  plugins: []
}
