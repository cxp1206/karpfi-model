module.exports = {
  root: true,
  // parser: 'babel-eslint',
  env: {
    node: true,
    es6: true
  },
  extends: [
    'standard'
  ],
  // required to lint *.vue files
  plugins: [],
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "globalReturn": true
    }
  },
  // add your custom rules here
  rules: {
    "space-before-function-paren": ["error", "never"],
    "one-var": 0,
    "no-useless-escape": 0,
    "no-undef": 0,
    "no-useless-call": 0
  }
}
