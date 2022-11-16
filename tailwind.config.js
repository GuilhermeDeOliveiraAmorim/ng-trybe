/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      backgroundImage: {
        "bg-ng": "url('/bg.jpg')",
      },
      colors: {
        "black-900": "#212529",
        "black-800": "#343A40",
        "black-700": "#495057",
        "black-600": "#6C757D",
        "black-500": "#ADB5BD",
        "black-400": "#CED4DA",
        "black-300": "#DEE2E6",
        "black-200": "#E9ECEF",
        "black-100": "#F8F9FA",
      },
    },
  },
  plugins: [],
};
