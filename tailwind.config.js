/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/*.liquid",
    "./layouts/*.liquid",
    "./snippets/*.liquid",
    "./sections/*.liquid",
  ],
  theme: {
    extend: {
      textColor: {
        default: "var(--COLOR-TEXT)",
      },
      colors: {
        primary: "var(--COLOR-PRIMARY)",
        border: "var(--COLOR-BORDER)",
        error: "var(--COLOR-ERROR)",
      },
      fontFamily: {
        serif: ["var(--font-body-family)", "serif"],
      },
    },
  },
  plugins: [],
};
