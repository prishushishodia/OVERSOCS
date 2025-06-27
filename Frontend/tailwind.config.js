/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#FF0000",
        cream: "#FFFDF7",
      },
     fontFamily: {
        heading: ['"Bebas Neue","Cinzel"']
      },
      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.05)',
        hover: '0 8px 20px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
