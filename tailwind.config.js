/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'playfair': ['Playfair Display', 'serif'],
        'basker': ['Baskervville SC', 'serif']
        // font-family: "Zilla Slab", serif;


      }
    },
  },
  plugins: [],
}