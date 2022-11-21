module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
      },
      fontSize: {
        sm: "16px",
        md: "25px",
        lg: "30px",
      },
      zIndex: {
        60: "60",
        100: "100",
      },
      colors: {
        primary: "#06aac7",
        grayCustom: "#b4b4b4",
        error: "#a22718",
      },
      height: {
        newScreen: "calc(100vh - 80px)",
      },
      boxShadow: {
        box: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
