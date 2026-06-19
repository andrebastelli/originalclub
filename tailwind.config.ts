import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        oc: {
          bg: '#1F1A17',
          card: '#2A2320',
          gold: '#C9A05A',
          'gold-hover': '#E0B870',
          text: '#FAF7F2',
          muted: '#B8AA9A',
          border: '#3D332C',
          separator: '#4A3E35',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        elegant: '0 10px 40px -12px rgba(201, 160, 90, 0.35)',
        card: '0 2px 12px -2px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}

export default config
