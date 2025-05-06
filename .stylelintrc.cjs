module.exports = {
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-recommended-vue"
    ],
    plugins: ["stylelint-scss"],
    customSyntax: 'postcss-scss',
    overrides: [
        {
            files: ["**/*.vue"],
            customSyntax: "postcss-html"
        }
    ],
    rules: {
        "selector-class-pattern": [
        /^[a-z0-9]+(?:-[a-z0-9]+)*(?:__[a-z0-9]+(?:-[a-z0-9]+)*)?(?:--[a-z0-9]+(?:-[a-z0-9]+)*)?$/,
            {
                message: "Expected class selector to follow BEM (kebab-case, optional __element and --modifier)"
            }
        ],
    }
}
