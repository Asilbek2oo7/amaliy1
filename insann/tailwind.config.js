/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'color-blue': '#00094c',
      },
      maxWidth: {
        'base': '1400px',
      }
    },
  },
  plugins: [],
}
