import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: 'var(--bg-primary)',
          surface: 'var(--bg-surface)',
          card: 'var(--bg-card)',
          border: 'var(--border-color)',
          teal: 'var(--accent-teal)',
          violet: 'var(--accent-violet)',
          amber: 'var(--accent-amber)',
          text: 'var(--text-main)',
          muted: 'var(--text-muted)',
        },
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at 50% 0%, var(--glow-teal) 0%, var(--glow-violet) 50%, transparent 80%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
