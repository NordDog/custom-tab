module.exports = {
  plugins: [
    require("postcss-parent-selector")({
      selector: ".mywrapperclass",
    }),
  ],
};