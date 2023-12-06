/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'text' : '#213547',
      'bgGray' : '#f8f8f8',
      'darkerGray' : '#DEDEDE',
      'white' : '#FFFFFF',
      'purple' : '#7c4aff',
      'logo-purple': '#8d61ff',
      'tri-purple' : '#4a7781',
      'tri-darkerGray' : '#e0dbec',
      'tri-text' : '#223a3e',
    },
    extend: {},
  },
  plugins: [],
}