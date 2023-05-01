# Recomendaciones del curso para mantener el performace de una aplicación web

# Índice

- [Mide tu aplicación](#mide-tu-aplicación)

- HTML

  - [Defer y Async](#defer-y-async)
  - [Precarga de Apis](#precarga-de-apis)
  - [MediaQueries desde el HTML](#mediaqueries-desde-el-html)

- CSS

  - [Coste de pintado del CSS](#coste-de-pintado-del-css)
  - [Elimina la Complejidad en selectores CSS](#elimina-la-complejidad-en-selectores-css)
  - [Usa etiquetas HTML para las imágenes](#usa-etiquetas-html-para-las-imágenes)

- JAVASCRIPT

  - [Web Fonts](#web-fonts)
  - [Performance en imágenes](#performance-en-imágenes)
  - [Imágenes Responsivas](#imágenes-responsivas)
  - [Recomendaciones para JavaScript](#recomendaciones-para-javascript)
  - [Analicemos nuestro bundle](#analicemos-nuestro-bundle)
  - [Reduciendo el tamaño del bundle](#reduciendo-el-tamaño-del-bundle)
  - [Code Splitting](#code-splitting)
  - [Usa los Event Delegation](#usa-los-event-delegation)
  - [Lazy Loading en JavaScript](#lazy-loading-en-javascript)
  - [Client Side Rendering VS Server Side Rendering](#client-side-rendering-vs-server-side-rendering)

- [Cositas para que funcione el curso](#cositas-para-que-funcione-el-curso)

# Mide tu aplicación

**Lo que no se puede medir, no se puede mejorar**

- Haz uso de las Developer Tools de Chrome para medir desde cómo está escrito el html hasta el análisis del JS.

# Defer y Async

**Usa los atributos defer - async + No usarlos, hace que el html no termine de renderizar para darle importancia al JavaScript**

```HTML
<script async src="dist/bundle.js"></script>
```

# Precarga de Apis

- Preloading, Prefetch y Preconnect

```HTML
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
<link rel="dns-prefetch" href="https://fonts.gstatic.com/" />
<link rel="preconnect" href="https://kitsu.io/" crossorigin />
<link rel="dns-prefetch" href="https://kitsu.io/" />
<link rel="prefetch" as="image" href="/assets/logo-platzi-video.png" />
```

# MediaQueries desde el HTML

- **Si tu página es responsive, usa los mediaQueries desde el HTML**

```HTML
<link media="screen and (min-width: 600px)" rel="stylesheet" href="/desktop.css" />
```

# Coste de pintado del CSS

- **Cualquier elementos que no sea transform - opacity, es muy caro su pintado y por ende, deber tratar de eliminar su uso lo máximo que puedas**

```CSS
/* Mal uso */
.carousel-item {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}
/* ------------------------------------------------------------------------*/
/* Buen uso */
.carousel-item::before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: "";
  box-shadow: 0 2px 8px rgba(0, 0, 0, 1);
  opacity: 0.4;
}
/* Hover en un elemento ::before */
.carousel-item:hover:before {
  opacity: 1;
}
```

# Elimina la Complejidad en selectores CSS

- **Usa algún método de clases css como por ejemplo BEM y, no uses id para seleccionar en css**

```CSS
/* Mal uso */
input:not([type='submit']):not([type='checkbox']) {
  /* code... */
}
.menu li a  {
  /* code... */
}
/* ------------------------------------------------------------------------*/
/* Buen uso */
/* Como máximo, un solo selector */
.header-nav__btn-send {
  /* code... */
}
```

# Usa etiquetas HTML para las imágenes

- **Si vas a usar imágenes, hazlo con su etiqueta html y no lo hagas con css**

- Problemas:
  - Accesibilidad (no podremos darle un alt a la imagen)
  - CSSOM bloqueante, Cuando inicie la carga la imagen de la página, el usuario no verá el logo hasta que el html termine de renderizarse

```HTML
  <!-- GOOD -->
  <img width="200" height="61" src="assets/user-icon.png" alt="Logo de la página" />
```

```CSS
  /* BAD */
  .logo {
      margin-left: 30px;
      width: 200px;
      height: 61px;
      background-image: url(/assets/logo-platzi-video.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
  }
```

# Web Fonts

- Problemas:

  - Los Web Fonts son muy malos para el performace de la página,
  - se recomienda usar máximo 2 | óptimo 1 | La mejor opción es no usarlos

- Estrategias para mejorar el performace de las fuentes

  1. Cambia el display de **"block"** por **"swap"**

  ```HTML
      <!-- Bad -->
      <link href="https://fonts.googleapis.com/css?family=Muli&display=block" rel="stylesheet" />

      <!-- GOOD -->
      <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet" />
  ```

  2. Si las fuentes no son de google fonts, entonces necesitares una librería link : **https://github.com/typekit/webfontloader**, a constinuación un caso de uso

  ```HTML
      <!-- HTML -->
      <script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
      <script>
          WebFont.load({
              google: {
              families: ['Muli']
              }
          });
      </script>
  ```

  ```CSS
      /* CSS */
      html {
          font-family: -apple-system, Helvetica, Arial, sans-serif;
      }
      html.wf-active {
          font-family: "Muli", -apple-system, Helvetica, Arial, sans-serif;
      }
  ```

# Performance en imágenes

- Por lo general maximo 70Kb en el peso de nuestras imagenes. Estrategias para mejorar el performace de las imágenes
  1.  **Las imágenes que tenemos control, imágenes que nosotros mismo subimos**
  - Recórtalas a su medida que se va a usar (No uses imágenes grandes y si cuando lo vas a renderizar en el navegador en una imagen pequeña)
    - Web de ayuda "https://www.photopea.com/"
  - Reduce su peso de la imagen,
    - Web de ayuda "https://www.photopea.com/"
  2.  **Imágenes que vienen en una API**
  - Tenemos que analizar la respuesta que nos da la API y ver qué tamaño de imagen de adecúa más a nuestras necesidades.
  - Normalmente las API suelen traer varios tipos de tamaño con estos nombres: "tiny" "large" "small" "medium" "original". Verifíca qué tamaño es más apropiado de usar.

# Imágenes Responsivas

- Cuando por ejemplo tenemos una imagen que pesa 300kb. Esto podría ser óptimo para los usuarios que cuenten con buena conexión a internet, sin embargo, para usuarios con una mala conexión esto podría alterar su experiencia con el sitio web
- Una solución sencilla es usar el atributo <Picture> y darle un usuario un tipo de imagen dependiendo el tamaño de su pantalla y hacemos la imagen responsive

# Recomendaciones para JavaScript

- El tiempo de interacción del sitio web y el usuario debe ser menor a 15s
- 350KB es lo moderado que debe pesar nuestro JavaScript
- Debemos usar empaquetadores web que nos transforme el código para producción, pero, ¿qué debemos hacer exactamente?

  1. Compilar webpack para producción (Construyendo un build.js más liviano con el script “npm run build”)

  ```json
   // file: package.json
   // Si no estamos usando webpack
   "scripts": {
    "build": "NODE_ENV=production webpack"
   },
   // Si estamos usando webpack
   "scripts": {
    "build": "webpack --mode production --env production"
   },
  ```

  ```BASH
    npm run build
  ```

  2. Utilizar un servidor listo para producción (Crear un servidor, usando “npm run serve”, que lea el proyecto de la raíz que incluye el build.js, que acaba de construirse con “npm run build”.)

  ```BASH
    npm i serve --save
  ```

  ```json
   // file: package.json
   "scripts": {
    "serve": "serve ." // el (punto) "." es para que tome todos los archivos desde la raiz
   },
  ```

  ```BASH
    npm run serve
  ```

# Analicemos nuestro bundle

- Nuestro bundle.js es todo el código JS que estamos utilizando en nuestro proyecto, esto incluye:
- Nuestros propios archivos **"Local Bundle"** y
- Los archivos JS que usemos de una librería **Vendor Bundle**

- Para analizar todo nuestro JS, sigue estos pasos (**"https://github.com/webpack-contrib/webpack-bundle-analyzer"**):

  1. Instala el plugin de visualizador de tamaño de archivos de Webpack

  ```BASH
    npm install --save-dev webpack-bundle-analyzer
  ```

  2. Configura el plugin

  ```JAVASCRIPT
  // file: webpack.config.js
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  // config para que solo corrar el plugin cuando le pasemos el flag --analyze
  const plugins = [];
  const shouldAnalyze = process.argv.includes('--analyze');
  if (shouldAnalyze) plugins.push(new BundleAnalyzerPlugin);
  const config = {
    // importamos los plugins
    plugins,
  }
  module.exports = config
  ```

  3. Corre el analizador

  ```BASH
    npm run build -- --analyze
  ```

# Reduciendo el tamaño del bundle

- Cuando usamos una librería y nos traemos los datos de esta manera, nos encontramos con un gran y simple problema.
  ```JAVASCRIPT
  import _ from 'lodash'
  ```
- Hermano, NOS ESTAMOS TRAENDO TODOS LOS DATOS DE ESA Puc** librería. Pero tranqui, la solución para esto es muy simple, con ustedes, les presento a **"Tree Shaking"\*\*. No te asustes mi king, esto ya lo has usado y, lo que hace es solo traernos un pedacito específico de código que sabemos que vamos a usar. he aquí 2 modos de usar

  1.  Classic Mode (como ya lo venía usando)

  ```JAVASCRIPT
  import { get } from 'lodash'
  ```

  2.  Fino Mode (Primera vez que lo veía)

  ```JAVASCRIPT
  import get from 'lodash/get'
  ```

  - Nota: Si la librería que estás usando no permite **"Tree Shaking"**, analiza si es que vale la pena usarlo, sino cámbialo por otra librería que sí lo admita.

# Code Splitting

- Esta técnica trata de separar nuestro bundle en 2 archivos: local y vendor

  1. Añade la configuración y corre el build

  ```JAVASCRIPT
    // file: package.json
    const config = {
      optimization: {
          splitChunks: {
              chunks: 'all',
              cacheGroups: {
                  defaultVendors: {
                      filename: 'vendors~main.bundle.js',
                  },
              },
          },
      },
    }
  ```

  ```BASH
    npm run build
  ```

  2. Enlaza los archivos que se generen de output (en este caso en "./dist") al html

  ```HTML
    <!-- Scripts -->
    <script async src="dist/vendors~main.bundle.js"></script>
    <script async src="dist/main.bundle.js"></script>
  ```

# Usa los Event Delegation

- ¿Qué son?
- Los Event Delegation, es una manera óptima de no crear demasiados escuchadores a nuestro DOM(addEventListener). Para más info, ingresa al curso de Manejo del DOM.
- Un ejemplo de ello:

  ```JAVASCRIPT
  // Agrego un escuchador de eventos a todo el documento (Una sola vez)
  document.addEventListener('click', (event) => {
    // y ahora, solo ocurrirá esto, si el elemento que le de click el usuario
    // tiene un id llamado "open-modal".
    if (event.target.id === 'open-modal') {
      // importante:
      // Si vas a usar el event dentro de esa función, entonces mándale por argumentos el event también
      modalListener(event);
    }
  });
  ```

# Lazy Loading en JavaScript

- **Lazy Loading: Importa la librería solo cuando hagas uso de ello.**

- Esta es una característica que tiene Webpack, cargar la librería solo cuando se hace uso de ello, el caso de uso de la clase:
- En el curso tenemos un modal, que se activa solo cuando le damos click a un elemento. Como vemos, esa librería no es nesaría que se cargue desde el inicio del proyecto, para transportar la carga de la librería de "el inicio del proyecto" hacia "cuando se haga click", sigue estos pasos.

  1. Analiza tu bundle

  ```BASH
    npm run build -- --analyze
  ```

  2. haz el import lazy que sea reconocido por webpack (Puede haber errores con los nombres)

  ```JAVASCRIPT
  // Transformamos de esto
  import { openModal } from './open-modal';
  openModal(videoId);
  // A esto
  import('./open-modal').then(({ openModal }) => {
      openModal(videoId);
  });
  ```

  3. Para solucionar el problema con los nombres, dígamosle a webpack con qué nombre de archivo debe exportar a /dist

  ```JAVASCRIPT
    import(/* webpackChunkName: "modal-video" */ './open-modal').then(({ openModal }) => {
        openModal(videoId);
    });
  ```

# Client Side Rendering VS Server Side Rendering

- ¿Qué diferencia hay entre ellos?

  - CSR: Hace todo (Descarga del bundle.js, renderizado a html), desde el navegador del usuario
  - SSR: Hace lo mismo que el anterior pero, desde el server. El server envía al navegador todo renderizado.

- ¿Lo vemos dentro del curso?

  - Sí lo vemos, pero al ser un tema de backend (porque lo hace nodejs desde el servido), lo explica rápida y sin ejemplos. para ver la clase de nuevo, ve a este link: https://platzi.com/clases/1973-web-performance/30459-aplicando-ssr/

- ¿Cuál es mejor SSR o CSR?

  - Ninguno de los 2 va a ser mejore que el otro, cada uno trae sus ventajas y desventajas. Ya te tocaría analizar cuál de los 2 métodos se adecua mejor a tu aplicación.

- ¿Cómo sabría si mi proyecto ya está usando SSR?
  1. Una forma de saber si ya se está usando SSR es abrir el proyecto en el navegador, darle click derecho y seleccionar la opción **Ver código fuente**.
  2. Si ves que ya está escrito el html lo que se suponía que haría tu JS, entonces SSR está en uso.

# Static Site Generation

- Cuando usemos una API tendremos 2 casos:

  1. La información que obtenemos es necesariamente cambiante:
     - API de Monedas
     - API del Clima
  2. La información que obtenemos es innecesariamente cambiante:
     - API de películas
     - API de Pokemon

- Entonces en el segundo tipo de API es donde podemos hacer esta mejora. Enseña al servido que en el tiempo de construccion del proyecto, traiga todo el contenido de la API’s de una vez, lo guarda y esa única respuesta generada se la envía a todas las conexiones.

- Con esto evitamos hacer cientos o miles de request a la API, para hacer solo 1 request y ese request enviárselo a todos los usuarios.

- Lo mismo que la anterior clase, no lo enseñó en clase puedo decirte con sinceridad que esto es lo que le da una velocidad increíble al renderizado, te dejo el link de la clase por si le quieres dar un ojo: https://platzi.com/clases/1973-web-performance/30460-pre-renderizando-el-contenido-static-generation/

# Cositas para que funcione el curso

```BASH
    npm i webpack@latest webpack-cli@latest webpack-dev-server@latest
```

```JavaScript
    devServer: {
        static: '.',
    },
```
