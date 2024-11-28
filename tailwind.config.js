/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     fontFamily:{
      sans:"Onest, sans-serif",
    },
    extend: {
      colors: {
        customPink: '#4B061D',
        customLightPink: '#F4E6DF',
        customDeepPink:  '#F3E2CA',
        customHarsh: '#EFEFEF',
        customWine: "#EFDCCE",
        customBrown: '#DF9A6D',
        customWhite: "#FCF7F3",
      },
      
    },
  },
  plugins: [],
}

