module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-recommended-scss",
    "stylelint-config-css-modules",
    "stylelint-config-prettier",
  ],
  plugins: ["stylelint-scss", "stylelint-no-unsupported-browser-features"],
  rules: {
    "plugin/no-unsupported-browser-features": [
      true,
      {
        severity: "warning",
      },
    ],
    // enabled empty blocks for initial scaffolding
    "block-no-empty": null,

    // disable pure css at-rule-no-unknown and enable scss specific equivalent
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
  },
};
