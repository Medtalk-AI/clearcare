const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Work Sans',
      body: 'Work Sans',
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
        primary: '#ffffff',
        secondary: '#f3f4f6',
        accent: {
          DEFAULT: '#3d5af1',
          hover: '#1134ea',
        },
        paragraph: '#000000',
      },
    },
  },
  plugins: [],
});