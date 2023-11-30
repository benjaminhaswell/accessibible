/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bgGray' : '#f8f8f8',
      'white' : '#FFFFFF',
      'purple' : '#7c4aff',
      'logo-purple': '#8d61ff'
    },
    extend: {},
  },
  plugins: [],
}