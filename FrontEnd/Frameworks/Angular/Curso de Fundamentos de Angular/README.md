# Instalación de Angular CLI

1. Verifica versión de Node

```BASH
node -v
```

2. Verifica versión de npm

```BASH
npm -v
```

3. Instala el CLI de Angular

```BASH
npm install -g @angular/cli
```

4. Verifica tu instalación

```BASH
ng version
```

5. Crea tu primer proyecto

```BASH
ng new my-project
```

6. Ejecuta el servidor de desarrollo

```BASH
cd my-project
ng serve
```

# Comandos de Angular para correr tu proyecto

1. Lanzar servidor de desarrollo y que abra el navegador automáticamente

```BASH
ng serve -o
```

2. Lanzar el servidor en un puerto especifico

```BASH
ng serve -o --port=1207
```

3. Lanzar el servidor en un host de tu ip

```BASH
#El ip debe coincidir con el de tu PC
ng serve --host 192.168.1.7 
```
