# Iniciemos esta aventura con ESBuild y React (con TypeScript)

-   Instalemos el esbuild

```BASH
npm i esbuild -D
```

-   Instalemos algunos básicos para React

```BASH
npm install react react-dom @types/react @types/react-dom typescript
```

-   Inicialicemos el archivo config de TS y, aunque podamos hacer cambios desde el archivo tsconfig.json, le podemos pasar también esos cambios desde ya por parámetro

```BASH
npx tsc --init --rootDir src --jsx react
```

-   Creamos los scripts necesarios para construir el proyecto

```
"scripts": {
    "build": "esbuild src/index.tsx --bundle --minify --sourcemap --outfile=public/bundle.js",
    "build:dev": "node esbuild.dev.js",
    "start": "node esbuild.config.js -w",
    "open": "open public/index.html"
  }
```

-   Instalamos paquete necesarios para hacer deploy del proyecto

```BASH
npm install esbuild-serve -D
```

-   Haz Deploy!!!

```BASH
npm run open
npm run build:dev
```
