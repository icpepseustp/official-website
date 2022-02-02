/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fec882",
        secondary: "#0e6fd7",
        offwhite: "#efe9e1",
      },
      fontFamily: {
        PS2P: ["'Press Start 2P'", "display"],
        montserrat: ["Montserrat", "sans-serif"],
        recursive: ["Recursive", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        libre: ["'Libre Baskerville'", "serif"],
      },
    },
  },
  plugins: [],
}
