/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#2B2B2B",
        olive: "#6F7A63",
        gold: "#B8965A",
        cream: "#FAF7F2",
      },
      fontFamily: {
        serif: ["Georgia", "'Iowan Old Style'", "'Times New Roman'", "serif"],
        sans: [
          "-apple-system",
          "'Segoe UI'",
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
}
