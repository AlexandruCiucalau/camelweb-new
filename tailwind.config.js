/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing:{
        'photo-w': '609px',
        'photo-h': '411px',
        'photo-bottom-h': '702'
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
      },
      colors: {
        camel: {
          500: "#E85C2B",
        },
      },
    },
  },
  plugins: [],
};