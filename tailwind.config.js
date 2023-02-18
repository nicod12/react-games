/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.{js,jsx}","./public/**/*.html"],
  content: ["./src/**/*.{html,js}", "./public/**/*.{html}"],
  theme: {
    extend: {
      padding: {
        '104': '32rem',
      },
      width: {
        '104': '32rem',
        '110': '40rem',
        '114': '46rem'
      },
      height: {
        '104': '32rem',
        '108': '40rem'
      }
    },
    screens: {
      'sm': {'min': '375px', 'max': '479px'},
      'md': {'min': '480px', 'max': '767px'},
      'lg': {'min': '768px', 'max': '1280px'},
      'xl': {'min': '1281px'},
    },
  },
  plugins: [
  ],
}
