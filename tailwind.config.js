module.exports = {
  purge: {
    mode: "all",
    enabled: true,
    preserveHtmlElements: false,
    content: ["./*.html", "./*.js"],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      brightness: ["hover", "focus"],
    },
  },
  plugins: [],
};
