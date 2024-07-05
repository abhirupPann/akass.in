/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "argBold": ["FSP DEMO -Agent CF", "sans serif"],
        "sf": ["Sf Pro Text", "sans serif"],
        "lotaReg" : ["LotaGrotesqueAlt1-Regular", "sans  serif"],
        "spaceGrotesk": ["Space Grotesk", "sans serif"]
      }
    },
  },
  plugins: [],
}

