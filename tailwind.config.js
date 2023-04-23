/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        dark: "url('/dark.jpg')",
        medium: "url('/medium.jpg')",
        bright: "url('/bright.jpg')",
      },
    },
  },
  plugins: [],
};
