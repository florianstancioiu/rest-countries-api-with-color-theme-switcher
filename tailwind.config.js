/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        'light-white': '#fafafa',
      },
      boxShadow: {
        normal: '0px 5px 5px 0px #eeeeee',
      },
    },
  },
  plugins: [],
};
