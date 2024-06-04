/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '360px',
      // => @media (min-width: 576px) { ... }

      'mobile': '767px',
      // => @media (min-width: 960px) { ... }

      'desktop': '1023px',
      // => @media (min-width: 1440px) { ... }
    },
    fontFamily: {
      'inter': 'Inter',
    },
    extend: {
      spacing: {
        '60': '80px',
        '80': '100px',
        '90': '280px',
      }
    },
  },
  plugins: [],
}
