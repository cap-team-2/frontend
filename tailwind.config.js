/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      paper: "#F0F0F0",
      "gray-light": "#F6F6F5",
      gray: "#CCCCCC",
      topaz: "#FECF73",
      gold: "#E6A50E",
      green: "#10890F",
      yellow: "#FFC300",
      "green-light": "#74C360",
      "green-dark": "#21610F",
      "blue-light": "#73A2FE",
      "blue-dark": "#0E4FE6",
      space: "#1D1D4B",
      red: "#ff0000",
    },
    fontFamily: {
      font: ["Montserrat"],
    },
    screens: {
      mobile: "375px",
      mobileMd: "560px",
      tablet: "640px",
      laptop: "1024px",
      desktop: "1280px",
      xl: "1680px",
    },
    extend: {
      backgroundImage: {
        light: "url('./src/assets/backgrounds/GlassWater.png')",
        dark: "url('./src/assets/backgrounds/slickCarbon.png')",
        veggieBanner:
          "url('./src/assets/background-ideas/engin-akyurt-Y5n8mCpvlZU-unsplash.jpg')",
        landingBanner:
          "url('./src/assets/Banners-page-sections/pexels-erik-scheel-95425.jpg')",
          background: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
      },
    },
  },
  plugins: [],
};


