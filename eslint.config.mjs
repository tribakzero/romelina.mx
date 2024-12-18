import js from "@eslint/js";
import ts from "typescript-eslint";
import tailwindEsLint from "eslint-plugin-tailwindcss";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginNext from "@next/eslint-plugin-next";
const config = [
    js.configs.recommended,
    ...ts.configs.recommended,
    ...tailwindEsLint.configs["flat/recommended"],
    eslintConfigPrettier,
    {
        plugins: {
            "@next/next": pluginNext,
        },
        rules: {
            ...pluginNext.configs.recommended.rules,
            ...pluginNext.configs["core-web-vitals"].rules,
        },
        ignores: ["out/", ".next/"],
    },
];
export default config;
