module.exports = {
  plugins: ['stylelint-scss'],
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-config-prettier',
    'stylelint-order',
    'stylelint-config-rational-order-fix',
  ],
  rules: {
    'color-hex-case': 'lower',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'font-family-no-missing-generic-family-keyword': null,
  },
};
