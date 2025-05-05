module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-recommended-vue"
  ],
  plugins: ["stylelint-scss"],
  customSyntax: "postcss-scss",
  overrides: [
    {
      files: ["**/*.vue"],
      customSyntax: "postcss-html"
    }
  ],
  rules: {
    // custom rules,
  }
}