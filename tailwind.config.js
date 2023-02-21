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
        sm: { min: "640px"},
        // => @media (min-width: 100px) { ... }

        md: { min: "768px"},
        // => @media (min-width: 768px ) { ... }

        lg: { min: "1024px"},
        // => @media (min-width: 1024px ) { ... }

        xl: { min: "1280px"},
        // => @media (min-width: 1280px) { ... }

        "2xl": { min: "1536px"},
        // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
  ],
}
