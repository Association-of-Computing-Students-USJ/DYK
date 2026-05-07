
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        base: '#0F0820',
        elevated: '#1A0B2E',
        primary: {
          DEFAULT: '#7C3AED',
          deep: '#2E1065',
          glow: '#6D28D9',
        },
        secondary: {
          DEFAULT: '#FFB020',
          light: '#FCD34D',
          dark: '#F5A623',
        },
        text: {
          DEFAULT: '#F8FAFC',
          muted: '#A78BFA',
        }
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(0.8)' },
          '50%': { opacity: 1, transform: 'scale(1.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
