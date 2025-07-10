/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#F5F5DC",     // Brand background color
        oversocsRed: "#FF0000", // Accent Red
        oversocsBlack: "#000000",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        anton: ["Anton", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        Michroma: ["Montserrat","sans-serif"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      minWidth: {
        "dropdown": "900px",
        "dropdown-wide": "1000px",
      },
      animation: {
        'fade-slide': 'fadeSlide 0.35s ease forwards',
        'spread-out': 'spreadOut 1.5s ease-in-out forwards',
        'shine': 'shine 2s linear infinite',
      },
      keyframes: {
        fadeSlide: {
          '0%': { opacity: '0', transform: 'translateY(10px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        spreadOut: {
          '0%': { transform: 'scale(1)', opacity: '1', borderRadius: '0%' },
          '50%': { transform: 'scale(3)', borderRadius: '40%' },
          '100%': { transform: 'scale(10)', opacity: '0', borderRadius: '50%' },
        },
        shine: {
          '0%': { 'background-position': '200% center' },
          '100%': { 'background-position': '-200% center' },
        },
      },
    },
  },
  plugins: [],
}
