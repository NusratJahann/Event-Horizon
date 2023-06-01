/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        eventHorizontheme: {
          primary: "#F2A905",
          neutral: "#0D0D0D",       
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}