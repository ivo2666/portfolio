/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      left: {
        "1/6": "22%",
      },
      inset: {
        "7%": "7%",
      },
      padding: {
        11: "11px",
      },
      maxWidth: {
        "85%": "85%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
    require("daisyui")
  ],
};
