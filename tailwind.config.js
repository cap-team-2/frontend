/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      "gray-light": "#F6F6F5",
      gray: "#CCCCCC",
      topaz: "#FECF73",
      gold: "#E6A50E",
      green: "#10890F",
      "green-light": "#74C360",
      "green-dark": "#21610F",
      "blue-light": "#73A2FE",
      "blue-dark": "#0E4FE6",
      space: "#1D1D4B",
    },
    screens: {
      mobile: "375px",
      // => @media (min-width: 375px)
      tablet: "640px",
      // => @media (min-width: 640px)

      laptop: "1024px",
      // => @media (min-width: 1024px)

      desktop: "1280px",
      // => @media (min-width: 1280px)
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
