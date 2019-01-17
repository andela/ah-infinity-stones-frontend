module.exports = {
    "extends": ["airbnb",
    "plugin:import/errors", "plugin:import/warnings"],
    "parser": "babel-eslint",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        'import/no-extraneous-dependencies': ["error", { devDependencies: true, }],
        "require-jsdoc" : 0
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
    ecmaFeatures: {
        modules: true,
        arrowFunctions: true
    },
    "parserOptions": {
        ecmaVersion: 6,
        sourceType: "module",
        allowImportExportEverywhere: true
    },
  extends: ['airbnb', 'plugin:import/errors', 'plugin:import/warnings'],
  rules: {
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true,
  },
  plugins: ['react'],
  ecmaFeatures: {
    modules: true,
    arrowFunctions: true,
  },
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
