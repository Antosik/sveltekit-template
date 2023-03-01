module.exports = {
  plugins: [
    "stylelint-scss",
    "stylelint-order"
  ],
  overrides: [
    {
      customSyntax: "postcss-scss",
      extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-prettier-scss",
        "stylelint-config-idiomatic-order"
      ],
      files: [
        "*.scss",
        "**/*.scss"
      ]
    },
    {
      customSyntax: require('postcss-html')({
        scss: require('postcss-scss')
      }),
      extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-prettier-scss",
        "stylelint-config-idiomatic-order",
        "stylelint-config-html/svelte"
      ],
      files: [
        "*.svelte",
        "**/*.svelte"
      ]
    }
  ],
  rules: {
    "selector-class-pattern": null,
    "no-invalid-position-at-import-rule": null,
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "function-no-unknown": null,
    "scss/function-no-unknown": [
      true,
      {
        "ignoreFunctions": [
          "grid",
          "map_get",
          "math_div",
          "gradient",
          "color_adjust_alpha"
        ]
      }
    ],
    "selector-pseudo-class-no-unknown": [
      true,
      {
        "ignorePseudoClasses": [
          "global"
        ]
      }
    ],
    "import-notation": "string",
    "scss/at-function-pattern": ".+(_.+)?",
    "scss/at-mixin-pattern": ".+(_.+)?"
  }
}