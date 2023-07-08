/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      DM: ["DM Sans", "sans-serif"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    screens: {
      "2xl": { max: "1735px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1579px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1423px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "1320px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "480px" },
      // => @media (max-width: 639px) { ... }

      tall: { raw: "(max-height: 650px)" },
      // => @media (min-height: 800px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
