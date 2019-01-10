module.exports = {
    "extends": ["airbnb","plugin:import/errors", "plugin:import/warnings"],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
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
    "parser": "babel-eslint",
    "parserOptions": {
        ecmaVersion: 6,
        sourceType: "module",
        allowImportExportEverywhere: true
    },
};
