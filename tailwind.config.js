/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'candy': {
          pink: '#FF69B4',
          purple: '#9B6DFF',
          blue: '#64B5F6',
          yellow: '#FFD700',
          mint: '#98FF98',
        },
        'candy-purple': '#7C3AED',
        'candy-pink': '#EC4899',
        'candy-yellow': '#FBBF24',
        'candy-teal': '#0D9488',
        'candy-indigo': '#4F46E5',
        'candy-rose': '#E11D48',
      },
      animation: {
        'bounce': 'bounce 2s infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-high': 'bounceHigh 3s ease-in-out infinite',
        'elegant-float': 'elegantFloat 4s ease-in-out infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-10%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        pulse: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '.5',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceHigh: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        elegantFloat: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-8px) rotate(2deg)' },
          '50%': { transform: 'translateY(0) rotate(0deg)' },
          '75%': { transform: 'translateY(-4px) rotate(-2deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
      },
      fontFamily: {
        'comic': ['Quicksand', 'Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'doodle': "url('../src/doodle-bg.svg')",
      },
    },
  },
  plugins: [],
} 