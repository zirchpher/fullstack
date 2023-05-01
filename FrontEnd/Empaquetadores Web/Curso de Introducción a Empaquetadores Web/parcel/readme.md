# ¡Ahora usemos el empaquetador web Parcel!

-   Instala parcel usando npm

```BASH
npm install -D parcel
```

-   Identifica tus entrada de archivos. Ingresa al package.json y haz esta modificación.

```
// Reemplaza main por source
"source": "src/index.html", // Error

"main": "index.html", // OK
```

-   Haz deploy de tu proyecto, en tu archivo package.json haz esta modificación.

```
"start": "parcel serve --port 8080 src/index.html",
"build" : "parcel build src/index.html --public-url ./"
```

-   Corre el proyecto

```BASH
npm run build
```
```BASH
npm run start
```