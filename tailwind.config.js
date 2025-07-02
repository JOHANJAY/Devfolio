/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  safelist: ["bg-retroRed", "text-retroRed", "bg-retroBlue", "text-retroBlue"],
  theme: {
    extend: {
      colors: {
        base: {
          light: "#fef6e4",
          dark: "#1a1a1a",
        },
        text: {
          light: "#272343",
          dark: "#f5f5f5",
        },
        retroRed: "#e63946",
        retroBlue: "#0077b6",
        retroYellow: "#f7c948",
        retroCream: "#fff1e6",
        retroBrown: "#6a4e42",
      },
      fontFamily: {
        retro: ['"Press Start 2P"', "monospace"],
        headline: ['"Caveat"', "cursive"],
        body: ['"IBM Plex Sans"', "sans-serif"],
      },
    },
  },
};
