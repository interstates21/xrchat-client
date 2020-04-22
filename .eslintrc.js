module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'plugin:react/recommended',
    "plugin:prettier/recommended",
    "prettier",
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    "prettier"
  ],
  rules: {
    "semi": "error",
    "max-len": ["error", { "code": 120 }],
    "comma-dangle": "off",
    "space-before-function-paren":"off",
    "no-unused-expressions":"off",
    "react/no-unknown-property":"off",
    "react/react-in-jsx-scope": "off", // React is available globally due to Next.js
    "prettier/prettier": "error"
  },
  overrides: [
    {
      "files": ["enums/*.tsx", "enums/*.ts"],
      "rules": {
        "no-unused-vars": ["off"],
      }
    }
  ]
}
