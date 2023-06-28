/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1735px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1479px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1223px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "1020px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "480px" },
      // => @media (max-width: 639px) { ... }

      tall: { raw: "(max-height: 800px)" },
      // => @media (min-height: 800px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
