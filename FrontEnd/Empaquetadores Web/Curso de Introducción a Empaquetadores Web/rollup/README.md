# Ahora toca Rollup crack! Fuck you Rollup, no funcionó por ahora, intentarlo después.

1. Instalemos Rollup

```bash
npm install rollup -D
```

2. Creamos el archivo de configuración "rollup.config.js" con la siguiente configuración

```javascript
export default {
    input: "src/index.js",
    output: {
        file: "dist/bundle.js",
        format: "es",
        sourcemap: true,
    },
};
```

3. Instalemos Dependencias necesarias

-   Problemilla aquí, salió error al instalar rollup-plugin-css-only, pero lo demás, ok

```bash
npm i @rollup/plugin-html @rollup/plugin-image rollup-plugin-copy -D
npm i rollup-plugin-css-only -D
```
