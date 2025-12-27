// eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";

export default tseslint.config(
   // Base recommended rules
   js.configs.recommended,
   ...tseslint.configs.recommended,

   // Backend TypeScript
   {
      files: ["backend/src/**/*.{ts,js}"],
      ignores: ["backend/dist/**"],
      languageOptions: {
         parser: tseslint.parser,
         parserOptions: {
            project: "./backend/tsconfig.json",
            tsconfigRootDir: import.meta.dirname,
         },
         globals: {
            ...globals.node,
         },
      },
      rules: {
         "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      },
   },

   // Webapp TypeScript + React
   {
      files: ["webapp/src/**/*.{ts,tsx,js,jsx}"],
      ignores: ["webapp/dist/**", "webapp/build/**"],
      languageOptions: {
         parser: tseslint.parser,
         parserOptions: {
            project: "./webapp/tsconfig.app.json",
            tsconfigRootDir: import.meta.dirname,
            ecmaFeatures: { jsx: true },
         },
         globals: {
            ...globals.browser,
         },
      },
      plugins: {
         react: reactPlugin,
         "react-hooks": reactHooksPlugin,
      },
      settings: {
         react: {
            version: "detect",
         },
      },
      rules: {
         "react/react-in-jsx-scope": "off",
         "react-hooks/rules-of-hooks": "error",
         "react-hooks/exhaustive-deps": "warn",
         "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      },
   }
);
