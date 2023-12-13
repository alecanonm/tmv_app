/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateX(0)' },
          '40%': { transform: 'translateX(0)' },
          '60%': { transform: 'translateX(10px)' },
        },

        bounceReverse: {
          '0%, 100%': { transform: 'translateX(0)' },
          '40%': { transform: 'translateX(0)' },
          '60%': { transform: 'translateX(-10px)' },
        },
      },
      animation: {
        'bounce-horizontal': 'bounce 1s infinite',
        'bounce-horizontal-reverse': 'bounceReverse 1s infinite',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        brandButton: '#7474745d',
        brandGrayBG: '#dedcdc52',
        brandError: '#dc3545',
      },
    },
  },
  plugins: [],
}
