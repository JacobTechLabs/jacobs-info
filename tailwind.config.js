/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['clamp(2.5rem, 5vw, 4rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'title': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
        'subtitle': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.4' }],
      },
      colors: {
        brand: {
          50: '#FDFCF8',
          100: '#F5F3EE',
          200: '#E8E4DC',
          300: '#D4CFC4',
          400: '#B8B0A0',
          500: '#9A9180',
          600: '#7A7366',
          700: '#5A544A',
          800: '#3D3832',
          900: '#1F1D1A',
          950: '#0D0D0D',
        },
        gold: {
          100: '#F9F6EE',
          200: '#F0E9D6',
          300: '#E4D7B8',
          400: '#D4C194',
          500: '#C9A962',
          600: '#B8964A',
          700: '#9A7B3D',
          800: '#7A6130',
          900: '#5A4724',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, #C9A962 0%, #D4C194 50%, #B8964A 100%)',
      },
    },
  },
  plugins: [],
}
