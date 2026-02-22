import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1. This must be a separate object at the top of the array
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/public/**",
      "next-env.d.ts",
    ],
  },
  // 2. Your existing config
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;