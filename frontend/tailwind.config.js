/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c8ff',
          300: '#66adff',
          400: '#3392ff',
          500: '#0077ff',
          600: '#005fcc',
          700: '#004799',
          800: '#002f66',
          900: '#001833',
        },
        secondary: {
          50: '#f5e6ff',
          100: '#ebccff',
          200: '#d699ff',
          300: '#c266ff',
          400: '#ad33ff',
          500: '#9900ff',
          600: '#7a00cc',
          700: '#5c0099',
          800: '#3d0066',
          900: '#1f0033',
        },
        dark: {
          100: '#d5d5d5',
          200: '#ababab',
          300: '#808080',
          400: '#565656',
          500: '#2b2b2b',
          600: '#222222',
          700: '#1a1a1a',
          800: '#111111',
          900: '#080808',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        'card': '0.625rem',
      },
    },
  },
  plugins: [],
};