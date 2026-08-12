/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FBF7F1',
        ink: '#1F1A2B',
        emerald: {
          DEFAULT: '#0B6E4F',
          light: '#12855F',
          dark: '#084C37',
        },
        ruby: {
          DEFAULT: '#B23A48',
          light: '#C85462',
          dark: '#8A2A36',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E3C158',
          dark: '#9C7E1C',
        },
        blush: '#F3D9DF',
        sapphire: '#2C4A7C',
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
        'facet-gradient': 'linear-gradient(135deg, #0B6E4F 0%, #12855F 35%, #C9A227 100%)',
      },
    },
  },
  plugins: [],
}
