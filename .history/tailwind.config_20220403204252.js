module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#07092C",
      },

      fontFamily: {
        inter: ["Inter var", "sans-serif"],
        Anonymous Pro: ["Anonymous Pro", "monospace"],
      },

      }
    },

    plugins: [],
  },
};
