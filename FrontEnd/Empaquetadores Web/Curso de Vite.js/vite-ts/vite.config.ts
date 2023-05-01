import { resolve } from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
    // Command puede ser: serve, build, preview
    // Mode puede ser: development, production

    // Creamos un objeto con las variables de entorno
    const env = loadEnv(mode, process.cwd());
    console.log(env);

    if (mode === "development") {
        return {
            server: {
                port: 8080,
            },
        };
    } else {
        return {
            build: {
                // Configuration rollup, not vite
                // rollupOptions: {
                //     // habilitamos rutas extras de html
                //     input: {
                //         // __dirname = Saca la ruta actual del archivo
                //         main: resolve(__dirname, "index.html"),
                //         register: resolve(__dirname, "src/register.html"),
                //         // register: resolve(__dirname, "src", "register.html"),
                //     },
                // },

                lib: {
                    entry: resolve(__dirname, "src/lib/lib.ts"),
                    name: "lib",
                    fileName: (format) => `lib.${format}.js`,
                },
            },
        };
    }
});

// Uso recomendado con vite-ts
// import { defineConfig, splitVendorChunkPlugin } from "vite";
// import react from "@vitejs/plugin-react";
// const path = require("path");

// function getAliases() {
//     return {
//         "@api": path.resolve(__dirname, "./src/main/services/api"),
//         "@assets": path.resolve(__dirname, "./src/library/assets"),
//         "@components": path.resolve(__dirname, "./src/library/components"),
//         "@pages": path.resolve(__dirname, "./src/pages"),
//         "@services": path.resolve(__dirname, "./src/main/services"),
//     };
// }

// // https://vitejs.dev/config/
// export default defineConfig(({ command, mode }) => {
//     if (command === "serve" && mode === "development") {
//         return {
//             // dev specific config
//             plugins: [react()],
//             resolve: {
//                 alias: getAliases(),
//             },
//         };
//     } else {
//         // command === 'build' && mode === 'production'
//         return {
//             // build specific config
//             plugins: [react(), splitVendorChunkPlugin()],
//             build: {
//                 outDir: "build",
//                 chunkSizeWarningLimit: 1000,
//                 minify: "esbuild",
//             },
//             resolve: {
//                 alias: getAliases(),
//             },
//         };
//     }
// });
