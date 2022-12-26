/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      colors: {
        dark: '#051A24',
        blu: '#087E8B',
        rosen: '#BB1018',
        whiteb: '#F0F5FA'
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}
