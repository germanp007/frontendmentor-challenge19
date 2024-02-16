/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "600px",
      md: "760px",
      lg: "920px",
    },
    extend: {
      colors: {
        VeryDarkBlue: "hsl(233, 47%, 7%)", // (main background)
        DarkDesaturatedBlue: "hsl(244, 38%, 16%)", //(card background)
        SoftViolet: "hsl(277, 64%, 61%)", //  (accent)
        MaskBg: "rgba(94, 0, 144, 0.8)",
        White: " hsl(0, 0%, 100%)", //  (main heading, stats)
        SlightlyTransparentWhite1: "hsla(0, 0%, 100%, 0.75)", //(main paragraph)
        SlightlyTransparentWhite2: "hsla(0, 0%, 100%, 0.6)", //(stat headings)
      },
      fontFamily: {
        inter: ["Inter"],
        lexend: ["Lexend Deca"],
      },
    },
  },
  plugins: [],
};
