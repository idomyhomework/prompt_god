import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  // 1. Ignore build artifacts
  {
    ignores: ["dist", "node_modules", "vite.config.ts", "tailwind.config.js"]
  },
  
  // 2. Base JS and TS rules
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // 3. React specific configuration
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      parserOptions: {
        // Point to your frontend tsconfig
        project: ["./tsconfig.app.json", "./tsconfig.node.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
    rules: {
      // Recommended React Hooks rules
      ...reactHooks.configs.recommended.rules,
      
      // Custom rules for your project
      "react/react-in-jsx-scope": "off", // Not needed in modern React (Vite)
      "no-console": "warn",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  }
);