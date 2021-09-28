const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width:{
        '40':'40px !important',
        '140':'140px',
        '200':'200px',
      },
      height:{
        '0':'0px !important',
        '200':'200px',
      }
    },
    colors:{
      blue:colors.blue,
    },
    textColor:{
      white:'#fff'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
