import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ei-dark':        '#0a0c10',
        'ei-dark-2':      '#0d1520',
        'ei-card':        '#111318',
        'ei-card-hover':  '#181c24',
        'ei-accent':      '#00c2cb',
        'ei-accent-dark': '#00a3ab',
        'ei-accent-glow': '#00dde7',
        'ei-text':        '#f0f2f6',
        'ei-muted':       '#8892a4',
        'ei-border':      'rgba(0,194,203,0.12)',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,194,203,0.15) 0%, transparent 60%)',
        'card-gradient': 'linear-gradient(135deg, #111318 0%, #0d1015 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,194,203,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(0,194,203,0.4)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,194,203,0.12)',
        'card-hover': '0 4px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,194,203,0.35)',
        'glow': '0 0 40px rgba(0,194,203,0.25)',
        'glow-sm': '0 0 20px rgba(0,194,203,0.15)',
      },
    },
  },
  plugins: [],
}

export default config