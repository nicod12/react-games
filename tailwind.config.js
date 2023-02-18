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
        sm: { min: "100px", max: "767px" },
        // => @media (min-width: 100px and max-width: 767px) { ... }

        md: { min: "768px", max: "1023px" },
        // => @media (min-width: 768px and max-width: 1023px) { ... }

        lg: { min: "1024px", max: "1279px" },
        // => @media (min-width: 1024px and max-width: 1279px) { ... }

        xl: { min: "1280px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
  ],
}
