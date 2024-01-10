module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true,
    "node": true,
    "jest/globals": true
  },
  "extends": "eslint:recommended",
  "overrides": [
  ],
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": "latest"
  },
  "plugins": ["react", "jest"],
  "rules": {
    "indent": [
      "error",
      2
    ],
    "semi": [
      "error",
      "never"
    ],
    "eqeqeq": "error",
    "no-trailing-spaces": "error",
    "object-curly-spacing": [
      "error", "always"
    ],
    "arrow-spacing": [
      "error", { "before": true, "after": true }
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  }
}
