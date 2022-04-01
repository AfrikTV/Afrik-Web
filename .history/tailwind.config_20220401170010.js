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
          50: withOpacity("--tw-clr-primary-50"),
          100: withOpacity("--tw-clr-primary-100"),
          200: withOpacity("--tw-clr-primary-200"),
          300: withOpacity("--tw-clr-primary-300"),
          400: withOpacity("--tw-clr-primary-400"),
          500: withOpacity("--tw-clr-primary-500"),
          600: withOpacity("--tw-clr-primary-600"),
          700: withOpacity("--tw-clr-primary-700"),
          800: withOpacity("--tw-clr-primary-800"),
          900: withOpacity("--tw-clr-primary-900"),
        },
        secondary: {
          // Customize it on globals.css :root
          50: withOpacity("--tw-clr-secondary-50"),
          100: withOpacity("--tw-clr-secondary-100"),
          200: withOpacity("--tw-clr-secondary-200"),
          300: withOpacity("--tw-clr-secondary-300"),
          400: withOpacity("--tw-clr-secondary-400"),
          500: withOpacity("--tw-clr-secondary-500"),
          600: withOpacity("--tw-clr-secondary-600"),
          700: withOpacity("--tw-clr-secondary-700"),
          800: withOpacity("--tw-clr-secondary-800"),
          900: withOpacity("--tw-clr-secondary-900"),
        },
      },
      keyframes: {
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: 0.99,
            filter:
              "drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: 0.4,
            filter: "none",
          },
        },
      },
      animation: {
        flicker: "flicker 3s linear infinite",
      },
    },
  },
  plugins: [],
};
