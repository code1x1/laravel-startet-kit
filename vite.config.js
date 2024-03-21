import { defineConfig } from 'vite';
import alias from '@rollup/plugin-alias';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from "path";


const projectRootDir = path.resolve(__dirname);

const entries = {
    entries: [
        {
            find: 'src/',
            replacement: path.resolve(projectRootDir, 'resources/') + "/"
        },
        {
            find: "ziggy-js",
            replacement: "./vendor/tightenco/ziggy"
        }
    ]

  }

const config = defineConfig({
    resolve: {
        alias: alias(entries)
    },
    plugins: [
        laravel({
            input: 'src/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],
});

export default config
