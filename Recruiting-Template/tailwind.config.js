/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: '#80A1BA', // Ocean Blue
        secondary: '#91C4C3', // Teal Waters
        accent: '#B4DEBD', // Sea Green
        cream: '#FFF7DD', // Sandy Cream
        dark: '#1f2937',
        light: '#f8fafc',
      },
    },
  },
  plugins: [],
};
