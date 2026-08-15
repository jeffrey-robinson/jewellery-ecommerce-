/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FCF8F2', // Warm Ivory primary background
        ink: '#211522',   // Dark Plum primary text
        emerald: {
          DEFAULT: '#D4AF65', // Champagne Gold
          light: '#E8D8EE',   // Soft Lavender
          dark: '#6A3578',    // Royal Purple
        },
        ruby: {
          DEFAULT: '#6A3578', // Royal Purple
          light: '#E8D8EE',   // Soft Lavender
          dark: '#3B183F',    // Deep Plum
        },
        gold: {
          DEFAULT: '#D4AF65', // Champagne Gold
          light: '#F0E6D2',   // Soft light gold
          dark: '#B38B3E',    // Rich dark gold
        },
        orange: {
          DEFAULT: '#6A3578', // Royal Purple
          light: '#E8D8EE',   // Soft Lavender
          dark: '#3B183F',    // Deep Plum
        },
        blush: '#FCF8F2',     // Warm Ivory
        sapphire: '#6A3578',  // Royal Purple
        // New luxury color palette explicit names
        'plum-deep': '#3B183F',
        'purple-royal': '#6A3578',
        'lavender-soft': '#E8D8EE',
        'ivory-warm': '#FCF8F2',
        'gold-champagne': '#D4AF65',
        'plum-dark': '#211522',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px -10px rgba(59, 24, 63, 0.15)',
        glow: '0 0 0 1px rgba(212, 175, 101, 0.35)',
      },
      backgroundImage: {
        'facet-gradient': 'linear-gradient(135deg, #3B183F 0%, #6A3578 35%, #D4AF65 100%)',
      },
    },
  },
  plugins: [],
}
