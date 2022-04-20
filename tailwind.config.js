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
            'snakeBg' : "url('../public/assets/images/snake.svg')",
        }),
        colors: {
          primary: "#07092C",
          secondary: "#F39C11",
          'greyColor': "rgba(171, 171, 171, 0.29)",
          'blackTransparent': "rgba(37, 34, 34, 0.64)",
        },
  
        fontFamily: {
          inter: ["Inter var", "sans-serif"],
          AnonymousPro: ["Anonymous Pro", "monospace"],
          Poppins: ["Poppins", "sans-serif"],
        },
      },
  
      plugins: [],
    },
  };
  