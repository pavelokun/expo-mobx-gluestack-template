module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension
      extends: ['akveo/react-native:recommended'],
      parserOptions: {
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
      rules: {
        '@typescript-eslint/no-misused-promises': 'warn',
        "no-restricted-syntax": "off",
        "react-native/no-raw-text": "off",
        "react/display-name": "off",
        "@typescript-eslint/no-shadow": "off"
      },
    },
  ],
};