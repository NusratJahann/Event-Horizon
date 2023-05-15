/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          secondary: "#ffffff",
          primary: "#0d0d0d",
          accent: "#f2a905",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}