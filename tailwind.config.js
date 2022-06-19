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
        'grey': '#F5F5F5',
        'black': '#464444',
        'red': '#BA7C7B',
      },
      backgroundImage: {
        'body-texture': "url('/src/assets/img/paper-texture.png')",
      },
      spacing: {
        '23': '23px',
        '22': '22px',
        '32px': '32px',
        '71%': '71%'
      },
      boxShadow: {
        'l': '4px -4px 12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
