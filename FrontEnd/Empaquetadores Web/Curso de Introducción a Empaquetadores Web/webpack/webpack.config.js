const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Donde se encuentra el archivo principal de JS
    entry: "./src/index.js",
    // Punto de Salida
    output: {
        // dirname: directorio base y luego creará una carpeta dist donde enviará todos los archivos preparados
        path: path.resolve(__dirname, 'dist'),
        // filename: cómo se va a llamar el archivo resultante
        filename: "main.js"
    },
    // resolve: Permite identificar las distintas extensiones que estemos trabajando
    // Para este caso usaremos JS, sin embargo se puede usar otros tipos como .ts .jsx
    resolve: {
        extensions: ['.js']
    },
    module: {
        // En rules agregamos plugins, recursos necesarios para webpack
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: "./index.html"
        })
    ]
}