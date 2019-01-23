module.exports = {
    "extends": ["airbnb",
    "plugin:import/errors", "plugin:import/warnings"],
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        'import/no-extraneous-dependencies': ["error", { devDependencies: true, }],
        "require-jsdoc" : 0,
        "react/prefer-stateless-function": [2, { "ignorePureComponents": true }],
    },
    env: {
        es6: true,
        browser: true,
        node: true,
        jest: true
    },
    "plugins": [
        "react"
      ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  "globals": {
    "shallow": true,
    "render": true,
    "mount": true
},
};
