/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'text': ['"Poppins","sans-serif"'],
    },
    extend: {
      colors: {
        'blue': '#73BBB3',
      },
    },
  },
  plugins: [],
}
