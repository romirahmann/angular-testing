/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins",
      },
      color: {},
      backgroundColor: {
        primary: "#F7F7F7",
        button: "#FEC887",
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), // add this line
  ],
};
