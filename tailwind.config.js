/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
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
      animation: {
        marquee: "move-to-left 32s linear infinite",
      },
      keyframes: {
        "move-to-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
}
