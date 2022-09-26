module.exports = {
  extends: [require.resolve("@blitzjs/next/eslint")],
  root: true,
  env: {
    node: true,
    es6: true,
    "cypress/globals": true,
  },
  parserOptions: {
    ecmaVersion: 8, // to enable features such as async/await
  },
  ignorePatterns: ["node_modules/*", ".next/*", ".out/*"],
  plugins: ["@typescript-eslint", "cypress"],
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: 'module',
        project: 'tsconfig.eslint.json',
        tsconfigRootDir: './',
      },
      settings: {
        react: {
          version: "detect",
        },
        "import/resolver": {
          typescript: {},
        },
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      },
      extends: [
        "airbnb",
        "airbnb-typescript",
        "eslint:recommended",
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended", // TypeScript rules
        "plugin:react/recommended", // React rules
        // 'plugin:react-hooks/recommended', // React hooks rules
        "plugin:jsx-a11y/recommended", // Accessibility rules
        "plugin:prettier/recommended", // Prettier plugin
        "prettier",
      ],
      plugins: ["import", "cypress"],
      rules: {
        "prettier/prettier": ["error", { endOfLine: "auto" }, { usePrettierrc: true }], // Includes .prettierrc.js rules
        "arrow-body-style": [2, "as-needed"],
        "no-nested-ternary": 0,
        "comma-dangle": 0,
        "consistent-return": 0,
        curly: ["error", "all"],
        "no-underscore-dangle": 0,
        "import/imports-first": 0,
        "import/newline-after-import": 0,
        "import/no-dynamic-require": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-named-as-default": 0,
        "import/no-unresolved": 2,
        "import/no-webpack-loader-syntax": 0,
        "import/prefer-default-export": 0,
        "no-warning-comments": [1, { terms: ["todo", "fixme"], location: "anywhere" }],

        // We will use TypeScript's types for component props instead
        "react/prop-types": "off",

        // No need to import React when using Next.js
        "react/react-in-jsx-scope": "off",
        "react/jsx-no-useless-fragment": "off",
        "react/jsx-props-no-spreading": "off",
        "react/require-default-props": "off",
        "react/button-has-type": ["warn"],

        "react/function-component-definition": [
          2,
          {
            namedComponents: "function-declaration",
            unnamedComponents: "arrow-function",
          },
        ],

        // This rule is not compatible with Next.js's <Link /> components
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/interactive-supports-focus": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/accessible-emoji": "off",
        "jsx-a11y/alt-text": "off",
        // Why would you want unused vars?
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/no-floating-promises": ["warn"],

        // I suggest this setting for requiring return types on functions only where useful
        "@typescript-eslint/explicit-function-return-type": [
          "warn",
          {
            allowExpressions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: true,
          },
        ],
      },
    },
  ],
}
