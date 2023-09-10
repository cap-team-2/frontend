/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      topaz: "#FECF73",
      gold: "#E6A50E",
      "green-light": "#74C360",
      "green-dark": "#21610F",
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
