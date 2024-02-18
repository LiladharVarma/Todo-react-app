/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      popoins : ["Poppins" , "sans-serif"],
      martianMono : ["Martian Mono" , "monospace"],
      Quicksand : ["Quicksand", "sans-serif"]
    }
  },
  plugins: [],
}

