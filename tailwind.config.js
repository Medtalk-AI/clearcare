const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      body: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#eae9ee',
        secondary: '#d5d4dc',
        accent: {
          DEFAULT: '#3d5af1',
          hover: '#1134ea',
        },
        header: '#1f1a50',
        paragraph: '#565574',
        alert: '#a1acea',
      },
    },
  },
  plugins: [],
});