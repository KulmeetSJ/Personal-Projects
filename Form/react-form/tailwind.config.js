/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        black: { 900: "#000000", "900_66": "#00000066", "900_14": "#00000014" },
        gray: {
          100: "#f6f6f6",
          900: "#111111",
          "900_51": "#11111151",
          "900_66": "#11111166",
          "900_14": "#11111114",
          "900_99": "#11111199",
          "900_28": "#11111128",
          "900_7f": "#1111117f",
        },
      },
      boxShadow: { bs: "inset -1px 0px 1px 0px #00000014" },
      fontFamily: { inter: "Inter", dmserifdisplay: "DM Serif Display" },
      opacity: { 0.4: 0.4 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
