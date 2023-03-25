const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../ui/**/*.{js,ts,jsx,tsx}", "./**/*.tsx"],
  theme: {
    extend: {
      colors: {
        ...colors,
        blue: {
          ...colors.blue,
          whale: "#023246",
          smalt: "#527687",
        },
        whisper: "#fdfdfe",
        yellow: {
          ...colors.yellow,
          selective: "#fdb702",
        },
        brown: {
          ...colors.brown,
          saddle: "#583400",
        },
        silver: "#aeaeae",
        gold: {
          luxor: "#948728",
          rod: "#fcd56d",
        },
      },
    },
  },
  plugins: [],
};
