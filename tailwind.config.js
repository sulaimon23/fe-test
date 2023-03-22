/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    boxShadow: {
      container:
        " 0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",
      featured:
        "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06);",
      button: "0px 1px 2px rgba(16, 24, 40, 0.05)",
    },
    colors: {
      gray: {
        100: " #F2F4F7",
        200: "#EAECF0",
        300: "#D0D5DD",
        400: "",
        500: "",
        600: "#475467",
        700: "#344054",
        800: "",
        900: "#101828",
      },
      grayBg: "#F2F4F7",
      primary: {
        600: "#004CCC",
      },
      white: "#FFFFFF",
      lightGray: "#98A2B3",
      warning: {
        50: "#FFFAEB",
        500: " #F79009",
        700: "#B54708",
      },
      error: {
        500: "#F04438",
      },
    },
  },
  plugins: [],
};
