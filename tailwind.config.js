module.exports = {
  purge: ['./dist/*.html', "./src/**/*.{html,js}"],
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    extend: {
      aspectRatio: {
        '5/6': '5/6',
        '4/3': '4/3',
        '3/4': '3/4',
        '3/2': '3/2',
        '6/5': '6/5',
      },
    },
  },
  plugins: [],
}
