/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#030712',
        cyan: {
          core: '#06b6d4',
        },
        purple: {
          tech: '#a855f7',
        },
      },
      boxShadow: {
        glow: '0 0 48px rgba(6, 182, 212, 0.28)',
        purple: '0 0 54px rgba(168, 85, 247, 0.22)',
        insetGlow: 'inset 0 0 24px rgba(6, 182, 212, 0.1)',
      },
      backgroundImage: {
        'imperial-grid':
          'linear-gradient(rgba(6, 182, 212, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.08) 1px, transparent 1px)',
        'laser-border':
          'conic-gradient(from var(--angle), rgba(6,182,212,0), rgba(6,182,212,.95), rgba(168,85,247,.9), rgba(6,182,212,0))',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        pulseFlow: {
          '0%': { strokeDashoffset: 120 },
          '100%': { strokeDashoffset: 0 },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-1px, 1px)' },
          '40%': { transform: 'translate(1px, -1px)' },
          '60%': { transform: 'translate(-1px, -1px)' },
          '80%': { transform: 'translate(1px, 1px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 8s ease infinite',
        scan: 'scan 4s linear infinite',
        pulseFlow: 'pulseFlow 2s linear infinite',
        orbit: 'orbit 18s linear infinite',
        glitch: 'glitch 2.6s steps(2, end) infinite',
      },
    },
  },
  plugins: [],
};
