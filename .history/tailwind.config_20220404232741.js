module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#07092C",
        secondary: "##F39C11",
      },

      fontFamily: {
        inter: ["Inter var", "sans-serif"],
        AnonymousPro: ["Anonymous Pro", "monospace"],
      },
    },

    plugins: [],
  },
};
