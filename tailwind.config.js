module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
     
    },
    container: {
        center: true,
        padding: '2px'
    },
    extend: {
      fontFamily:{
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif;" 
      },
      colors: {
        'primary' : '#1d1d50',
        'rose': '#EF4423',
        'gray': '#707070'
      }
    },
  },
  variants:{
    extend: {
      display: ['group-hover'],
      visibility: ['group-hover'],
    }
  },

  plugins: [require('@tailwindcss/forms')],
}
