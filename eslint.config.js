export default [
  {
    ignores: ["node_modules/", "dist/", "build/"], // Ignorierte Verzeichnisse
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      "no-unused-vars": "warn",
      "prefer-const": "warn",
      eqeqeq: "error",
    },
  },
];
