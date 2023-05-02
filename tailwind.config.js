/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xl: { max: "1536px" },
      lg: { max: "1280px" },
      md: { max: "1024px" },
      sm: { max: "768px" },
    },
    extend: {},
  },
  plugins: [],
}

