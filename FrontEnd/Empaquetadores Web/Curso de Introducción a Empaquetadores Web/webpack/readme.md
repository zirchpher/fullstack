# ¿Cómo Implementar WebPack a un proyecto?

-   Instalación De Web Pack

```bash
npm install webpack webpack-cli -D
```

-   Paquetes necesarios para el desarrollo de webpack

```bash
npm install html-webpack-plugin copy-webpack-plugin @babel/core babel-loader -D
```

-   Paquetes necesarios para hacer deploy del proyecto

```bash
npm install webpack-dev-server -D
```

-   Crea el un archivo con el nombre **webpack.config.js** y por dentro escribe la configuración de tu proyecto, el siguiente código es de ejemplo:

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // Donde se encuentra el archivo principal de JS
    entry: "./src/index.js",
    // Punto de Salida
    output: {
        // dirname: directorio base y luego creará una carpeta dist donde enviará todos los archivos preparados
        path: path.resolve(__dirname, "dist"),
        // filename: cómo se va a llamar el archivo resultante
        filename: "main.js",
    },
    // resolve: Permite identificar las distintas extensiones que estemos trabajando
    // Para este caso usaremos JS, sin embargo se puede usar otros tipos como .ts .jsx
    resolve: {
        extensions: [".js"],
    },
    module: {
        // En rules agregamos plugins, recursos necesarios para webpack
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: "./public/index.html",
            filename: "./index.html",
        }),
    ],
};
```

-   Crea estos scripts en package.json

```JSON
"scripts": {
    "build": "webpack --mode production",
    "start": "webpack-dev-server --open --mode development"
},
```

** RESUMEN DE LO QUE HA SIDO IMPLEMENTAR MI PRIMER EMPAQUETADOR WEB CON "WEB PACK" ** 
Aunque este es un curso introductorio y, se ha entrado a WebPack de manera muy básica, se le puede sacar de mucha utilidad a estos empaquetadores web, sobre todo para el uso de TypeScript.
