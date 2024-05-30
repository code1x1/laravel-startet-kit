import { defineConfig } from "vite";
import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";


const config = defineConfig({
    root: __dirname,
    resolve: {
        alias: [
            {
                find: "ziggy-js",
                replacement: "./vendor/tightenco/ziggy"
            }]
    },
    plugins: [
        laravel({
            input: "resources/js/app.tsx",
            refresh: true
        }),
        resolve(),
        react(),
        tsconfigPaths()
    ],
});

export default config;
