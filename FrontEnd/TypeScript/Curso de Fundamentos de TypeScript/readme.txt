CONFIFURACIONES NECESARIAS

1) El compilador de Typescript
El navegador ni NodeJS leen typescript por defecto, por lo que necesitamos un compilador de typescript para convertir nuestro código typescript a javascript.

Transnformar typescript a javascript
$ npx tsc src/*.ts --target es6 --module commonjs --outDir dist

Donde:
--target es6: es la versión de javascript que queremos que compile
--module commonjs: es el módulo que queremos que compile
--outDir dist: es la carpeta donde queremos que guarde los archivos javascript compilados


2) Veamos el TSConfig.json
Viste lo anterior que es tedioso estar poniendo demiadas veces las mismas opciones de compilación, por lo que podemos crear un archivo llamado tsconfig.json y poner las opciones de compilación ahí, de esta manera no tenemos que estar poniendo las opciones de compilación cada vez que queramos compilar nuestro código typescript.

- Crear un archivo por defecto de configuración de typescript
$ npx tsc --init

- Ahora ya no es necesario mandarle otro flag a la hora de compilar, ya que el compilador de typescript va a buscar el archivo tsconfig.json y va a tomar las opciones de compilación de ahí.
$ npx tsc

- Para finalizar, cuando hacemos un cambio en nuestro código typescript, es tedioso estar compilando ese código muchas veces, para solucionar esto podemos añadir como un "escuchador de cambios" a nuestro compilador de typescript, de esta manera cada vez que hagamos un cambio en nuestro código typescript, el compilador de typescript va a compilar automáticamente nuestro código typescript a javascript.
$ npx tsc --watch


ERRORES COMUNES:

- Por defecto Typescript va a compilar todos los archivos que le indiquemos, sin importar si tiene o no errores, para solucionar esto, podemos activar esta opción en nuestro archivo tsconfig.json.
Nota: No va a compilar ningún archivo si tiene error alguno.
$ noEmitOnError: true
