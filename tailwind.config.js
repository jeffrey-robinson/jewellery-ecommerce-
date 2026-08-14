/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFDF9',
        ink: '#1F1A2B',
        emerald: {
          DEFAULT: '#D8B168',
          light: '#F3E2C4',
          dark: '#B08B45',
        },
        ruby: {
          DEFAULT: '#E36E53',
          light: '#F29C85',
          dark: '#BC4B32',
        },
        gold: {
          DEFAULT: '#D8B168',
          light: '#F3E2C4',
          dark: '#B08B45',
        },
        orange: {
          DEFAULT: '#E36E53',
          light: '#F29C85',
          dark: '#BC4B32',
        },
        blush: '#FBF9F6',
        sapphire: '#BC4B32',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(31, 26, 43, 0.25)',
        glow: '0 0 0 1px rgba(201, 162, 39, 0.35)',
      },
      backgroundImage: {
        'facet-gradient': 'linear-gradient(135deg, #E36E53 0%, #F29C85 35%, #D8B168 100%)',
      },
    },
  },
  plugins: [],
}
