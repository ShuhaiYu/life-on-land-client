
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      'sm': '12px',
      'base': '14px',
      'xl': '16px',
      '2xl': '20px',
      '3xl': '28px',
      '4xl': '38px',
      '5xl': '50px',
    },
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#242424',
        'grey': '#F3F3F3',
        'dark-grey': '#6B6B6B',
        'red': '#FA000F',
        'transparent': 'transparent',
        'purple': '#8B46FF',
        'brown': '#5A3F37',
        'dark-green': '#2C7744',
        'orange': '#FA8700',
        'yellow': '#C7A801',
      },
      fontFamily: {
        inter: ["'Inter'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"],
        righteous: ['Righteous', 'cursive'],
      },
    },
  },
  plugins: [],
};