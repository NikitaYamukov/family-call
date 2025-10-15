module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  };
  