/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      topaz: "#FECF73",
      gold: "#E6A50E",
      "green-light": "#5CB845",
      "green-dark": "#267113",
      "blue-light": "#73A2FE",
      "blue-dark": "#0E4FE6",
      space: "#1D1D4B",
    },
    extend: {
      backgroundImage: {
        light: "url(./src/assets/GlassWater.png)",
        dark: "url(./src/assets/slickCarbon.png)",
      },
    },
  },
  plugins: [],
};
