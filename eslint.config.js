import parser from "@typescript-eslint/parser";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import react from "eslint-plugin-react";

export default [
    {
        plugins: {
            react,
        },
        rules: {
            eqeqeq: "error",
            semi: "error",
            "prefer-const": "error",
            quotes: ["error", "double"],
        },
        languageOptions: {
            parser,
            parserOptions: {
                project: "./tsconfig.json",
                tsconfigRootDir: import.meta.dirname,
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        files: [
            "resources/**/*.{js,jsx,ts,tsx}",
            "eslint.config.js",
            "prettierrc.js",
            "postcss.config.js",
            "tailwind.config.js",
            "vite.config.js",
        ],
        ignores: ["node_modules", "build", "dist", "public"],
    },
    eslintConfigPrettier,
    eslintPluginPrettierRecommended,
];
