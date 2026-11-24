/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        border: 'rgba(224, 224, 224, 0.63)',
        'border-strong': '#e0e0e0',
        card: '#f9f9f9',
        'card-hover': '#f2f2f2',
        accent: {
          cyan: '#02d4f5',
          blue: '#0099ff',
          pink: '#e74e8a',
          dark: '#000000',
          gray: '#616161',
          'light-gray': '#878787'
        }
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', '"Big Shoulders Text"', 'sans-serif'],
        sans: ['"Host Grotesk"', 'Inter', 'sans-serif'],
        grotesk: ['"Host Grotesk"', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.3)', opacity: '0.7' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'pulse-dot': 'pulseDot 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [],
}
