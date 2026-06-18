import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        original: {
          bg: '#FAF7F2',
          card: '#FFFFFF',
          gold: '#B88A44',
          goldHover: '#9C7134',
          text: '#1F1A17',
          muted: '#6F6258',
          border: '#E7DCCF',
          separator: '#D8C6B3',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        elegant: '0 10px 40px -12px rgba(184, 138, 68, 0.25)',
        card: '0 2px 12px -2px rgba(31, 26, 23, 0.06)',
      },
    },
  },
  plugins: [],
} satisfies Config
