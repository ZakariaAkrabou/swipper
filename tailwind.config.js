module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff" },
        red: { 400: "#df6951" },
        blue_gray: { 900: "#181e4b" },
        black: { 900: "#000000", "900_19": "#00000019" },
        blue: { "300_e8": "#6499e9e8" },
      },
      boxShadow: { xs: "0px 20px 35px 0px #df695126" },
      fontFamily: { poppins: "Poppins", volkhov: "Volkhov" },
      backgroundImage: { gradient: "linear-gradient(135deg,)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
