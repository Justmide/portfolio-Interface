module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0044FB',
          50: '#e6edff',
          100: '#b3c7ff',
          200: '#809fff',
          300: '#4d77ff',
          400: '#1a5fff',
          500: '#0044FB',
          600: '#003ad4',
          700: '#0030ad',
          800: '#002686',
          900: '#001c5f',
        },
      },
      fontFamily: {
      quicksand: ['Quicksand', 'sans-serif'],
      caveat: ['Caveat', 'cursive'],
      script: ['Dancing Script', 'cursive'],
    },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        fadeOut: 'fadeOut 0.2s ease-in forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(-10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          'from': { opacity: '1', transform: 'translateY(0)' },
          'to': { opacity: '0', transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}