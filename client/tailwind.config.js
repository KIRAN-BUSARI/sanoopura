/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
      colors: {
        primary: "",
        secondary: "#A64340",
      },
      backgroundImage: {
        "heroImage": "url('/src/assets/mandala.png')"
      }
    },
    plugins: [],
  }
}