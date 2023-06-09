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
        'main-img': '#161A2C',
        'main-orange': '#FFAB38'

      },
      backgroundImage: {
        'hero-pattern': "url('/bavj.png')",
        'flash-image': "url('/flashcardImage.png')",
        'linux-image': "url('/linuximage.png')",
        'quiz-image': "url('/quizimage.png')",
        'pink-purple': "url('/caProjectBackground.jpg')",
         dark: "url('/dark.jpg')",
         medium: "url('/medium.jpg')",
         bright: "url('/bright.jpg')",
      },
      fontFamily: {
        'owners': ['owners', 'sans-serif'],

      },
    },
  },
  plugins: [],
};
