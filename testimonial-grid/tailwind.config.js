/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  screens: {
    sm: '480px',
    md:'760px',
    lg:'987px',
    xl: '1440px'
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow Semi Condensed','sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

