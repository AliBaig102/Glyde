/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'glyde-orange': {
          DEFAULT: '#FF8B06FF',
          dark: '#FFB266FF',
        },
        'glyde-dark-grey': {
          DEFAULT: '#303030FF',
          dark: '#4A4A4AFF',
        },
        'glyde-white': {
          DEFAULT: '#FFFFFFFF',
          dark: '#1A1A1AFF',
        },
        'glyde-blue': {
          DEFAULT: '#0465AAFF',
          dark: '#0465AAFF',
        },
        'glyde-light-grey': {
          DEFAULT: '#F5F5F5FF',
          dark: '#3A3A3AFF',
        },
        'glyde-very-light-grey': {
          DEFAULT: '#FAFAFAFF',
          dark: '#2D2D2DFF',
        },
        'glyde-dark-blue': {
          DEFAULT: '#061B38FF',
          dark: '#60A5FAFF',
        },
        'glyde-rating-yellow': {
          DEFAULT: '#F7DB32FF',
          dark: '#FACC15FF',
        },
        'glyde-grey': {
          DEFAULT: '#EFEFEFFF',
          dark: '#4B4B4BFF',
        },
        'glyde-red': {
          DEFAULT: '#FF4F4FFF',
          dark: '#EF4444FF',
        },
        'glyde-success-green': {
          DEFAULT: '#5CB85CFF',
          dark: '#34D058FF',
        },
        'glyde-light-blue': {
          DEFAULT: '#5BBBFFFF',
          dark: '#3B82F6FF',
        },
        'glyde-pale-blue': {
          DEFAULT: '#B6E1FFFF',
          dark: '#60A5FAFF',
        },
      },
    },
  },
  plugins: [],
};
