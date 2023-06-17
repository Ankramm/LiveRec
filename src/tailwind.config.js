/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./html/index.html', './js/app.js'],
  plugins: [],
  variants: {
    scrollbar: ['rounded']
  },
  theme: {
    extend: {
      colors: {
        diamant: '#546eta',
        'heliotrope': '#AE6AF6',
        'perano': '#A8D4F1',
      },
      variants: {
        textColor: ['active'],
      }
    }
  }
}