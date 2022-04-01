module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: {
          // Customize it on globals.css :root
          50: withOpacity('--tw-clr-primary-50'),
          100: withOpacity('--tw-clr-primary-100'),
          200: withOpacity('--tw-clr-primary-200'),
          300: withOpacity('--tw-clr-primary-300'),
          400: withOpacity('--tw-clr-primary-400'),
          500: withOpacity('--tw-clr-primary-500'),
          600: withOpacity('--tw-clr-primary-600'),
          700: withOpacity('--tw-clr-primary-700'),
          800: withOpacity('--tw-clr-primary-800'),
          900: withOpacity('--tw-clr-primary-900'),
        },
        secondary: {
          // Customize it on globals.css :root
          50: withOpacity('--tw-clr-secondary-50'),
          100: withOpacity('--tw-clr-secondary-100'),
          200: withOpacity('--tw-clr-secondary-200'),
          300: withOpacity('--tw-clr-secondary-300'),   
          400: withOpacity('--tw-clr-secondary-400'),
          500: withOpacity('--tw-clr-secondary-500'),
          600: withOpacity('--tw-clr-secondary-600'),
          700: withOpacity('--tw-clr-secondary-700'),
          800: withOpacity('--tw-clr-secondary-800'),
          900: withOpacity('--tw-clr-secondary-900'),
        },


        
      }

      

    },
  },
  plugins: [
    require('flowbite/plugin')
]
}