module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage: (theme) => ({
          "c":
            "url('./public/bg.svg')",
            "snake-bg" : "url('./public/assets/images/snake.svg')",
        }),
        colors: {
          primary: "#07092C",
          secondary: "#F39C11",
          'greyColor': "rgba(171, 171, 171, 0.29)"
        },
  
        fontFamily: {
          inter: ["Inter var", "sans-serif"],
          AnonymousPro: ["Anonymous Pro", "monospace"],
        },
      },
  
      plugins: [],
    },
  };
  