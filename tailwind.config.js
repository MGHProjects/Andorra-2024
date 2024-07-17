/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000', // Color rojo primario
      },
      fontFamily: {
        sans: ['Kalnia Glaze', 'serif'], // Fuente de Google Fonts
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateX(0)' },
          '100%': { transform: 'rotateX(-180deg)' },
        },
      },
    },
  },
  plugins: [],
}

