// backend/eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";

/**
 * ESLint 9 flat config for backend (Node + TypeScript)
 */
export default tseslint.config(
  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript ESLint recommended rules
  ...tseslint.configs.recommended,

  {
    files: ["src/**/*.{ts,tsx}"],
    ignores: ["dist", "node_modules"],

    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module"
      }
    },

    rules: {
      // Put your custom rules here, example:
      "no-console": "warn"
      // You can port rules from your old .eslintrc if you want
    }
  }
);