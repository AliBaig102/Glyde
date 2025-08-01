/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "food-orange": "#FF8B06FF",
        "food-dark-grey": "#303030FF", 
        "food-white": "#FFFFFFFF",
        "glyde-blue": "#0465AAFF",
        "glyde-white": "#FFFFFFFF",
        "light-grey": "#F5F5F5FF",
        "very-light-grey": "#FAFAFAFF",
        "glyde-dark-blue": "#061B38FF",
        "ratingstar-yellow": "#F7DB32FF",
        "glyde-grey": "#EFEFEFFF",
        "glyde-red": "#FF4F4FFF",
        "success-green": "#5CB85CFF",
        "spindrive-light-blue": "#5BBBFFFF",
        "glyde-light-blue": "#B6E1FFFF"
      },
    },
  },
  plugins: [],
}

