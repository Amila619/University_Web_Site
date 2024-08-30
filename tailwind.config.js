/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.ejs',
    './views/**/*.html',
    './assets/js/**/*.js',
  ],
  theme: {
    screens: {

      'mobile': {'min': '320px', 'max': '428px'},

      'sm': {'min': '428px', 'max': '767px'},
  

      'md': {'min': '768px', 'max': '1023px'},
  

      'lg': {'min': '1024px', 'max': '1279px'},
  

      'xl': {'min': '1280px', 'max': '1535px'},
  

      '2xl': {'min': '1536px'}
    },
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
  ],
  darkMode: 'class',
}
