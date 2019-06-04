const propertyOrder = require('./property-order');

module.exports = {
  extends: [
    // https://github.com/stylelint/stylelint-config-standard
    'stylelint-config-standard',
  ],

  plugins: ['stylelint-order'],

  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'blockless-after-blockless',
          'blockless-after-same-name-blockless',
          'first-nested',
        ],
        ignore: ['after-comment', 'inside-block'],
        ignoreAtRules: ['apply', 'screen', 'font-face', 'nest'],
      },
    ],
    // https://github.com/tailwindcss/discuss/issues/111#issuecomment-497282508
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'variants',
          'responsive',
          'apply',
          'screen',
        ],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['font-path'],
      },
    ],
    'order/properties-order': propertyOrder,
    'selector-nested-pattern': '^&',
  },
};
