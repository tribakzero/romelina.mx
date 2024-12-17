import js from "@eslint/js";
import ts from "typescript-eslint";
import tailwindEsLint from "eslint-plugin-tailwindcss";
import eslintConfigPrettier from "eslint-config-prettier";
import { FlatCompat } from "@eslint/eslintrc";
const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});
const config = [
    js.configs.recommended,
    ...ts.configs.recommended,
    ...tailwindEsLint.configs["flat/recommended"],
    eslintConfigPrettier,
    ...compat.config({ extends: ["next/core-web-vitals"] }),
    {
        ignores: ["out/", ".next/"],
    },
];
export default config;
