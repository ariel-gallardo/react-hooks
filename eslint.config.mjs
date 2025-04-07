import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    rules: {
      "prefer-const": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "import/no-anonymous-default-export": "error",
      "jsx-a11y/alt-text": "error",
      "@next/next/no-img-element": "error",
      "react-hooks/exhaustive-deps": "error",
    },
    ignorePatterns: [
      '.github'
      ,'.next'
      ,'.vercel'
      ,'node_modules'
      ,'public'
      ,'tsconfig.json'
      ,'README.md'
      ,'postcss.config.mjs'
      ,'package.json'
      ,'package-lock.json'
      ,'.gitignore'
    ]
  })
];

export default eslintConfig;
