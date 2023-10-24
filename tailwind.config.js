/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
        colors: {
          customBlue: '#00ffff',
          customBlue2: '#00b9d8',
          customBlue3: '#007ca7',
          customBlue4: '#004e77',
          customBlue5: '#002c4e'
        },
    },
  },
  plugins: [],
}

