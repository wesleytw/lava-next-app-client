module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{jsx,html,js}',
    './src/components/**/*.{jsx,html,js}'
  ],
  theme: {
    extend: {
///add from project_web3///
      screens: {
        mf: "990px",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
///add from project_web3


    },
///add from project_web3///
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
///add from project_web3


  },
///add from project_web3///
  variants: {
    extend: {},
  },
///add from project_web3

  plugins: [
    // require("@tailwindcss/forms")
  ],
}
