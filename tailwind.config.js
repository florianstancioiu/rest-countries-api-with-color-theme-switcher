/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        'light-white': '#fafafa',
        'dark-white': '#feffff',
        'dark-bg-one': '#2b3743',
        'dark-bg-two': '#202d36',
      },
      boxShadow: {
        normal: '0px 5px 5px 0px #eeeeee',
        regular: '0px 0px 5px 0px #eeeeee',
      },
    },
  },
  plugins: [],
};
