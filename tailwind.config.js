/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-main': '#202740',
        'header-main': '#333C5D',
        'main-img': '#161A2C'

      },
      fontFamily: {
        'owners': ['owners', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
