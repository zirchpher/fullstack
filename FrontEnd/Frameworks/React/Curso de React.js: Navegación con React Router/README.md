## HashRouter VS. BrowserRouter VS. MemoryRouter
Aunque los 3 hacen los mismo, tienen un diferente caso de uso.

`HashRouter`: Se usa especialmente para cuando tengas que hacer tu aplicación, pero sin usar backend, solo frontend.
> Su Modo de uso es: `/#/home`

`BrowserRouter`: Este es el más usado, y el más cómodo si haces una aplicación completa, tanto frontend y backend.
> Su Modo de uso es: `/home`

`MemoryRouter`: Este es el más extraño porque, tu aplicación va a empezar a cambiar de ruta pero sin modificar la url y, exacto, ¡es lo mismo como sucede en una aplicación móvil!
> Su Modo de uso es: `/` para todas las rutas


## Link VS. NavLink
Aunque ambos te redirigen hacia otra url, con NavLink en sus propiedades `className` y `style` te permiten recibir 2 parámetros: `isActive` y `isPending`.

> Código usando Link
```JavaScript
   <Link to="/">Home</Link>
```

> Código usando NavLink
```JavaScript
   <NavLink
      to="/"
      style={({ isActive }) => ({
         color: isActive ? 'red' : 'black',
      })}
   >
      Home
   </NavLink>
```

## useNavigate

useNavigate es un React Hook que es similar a los componentes de Link o NavLink, pero en vez de llevarnos a una ruta automáticamente por medio de un click, nos permite que con JavaScript cambiemos esta URL y nos movamos a una nueva ruta, podemos hacerlo con el evento click o el evento que deseemos.

Recive 2 argumentos navigate(haciaDonde, { opciones })

- haciaDonde: Hacia qué ruta quieres que se dirija
- { llave: string - valor: Boolean }: Allí tenemos a `replace` que lo que hace es crear un nuevo historial de navegación a partir de la nueva ruta.

> Código usando useNavigate
```JavaScript
   export const BlogPost = () => {
      const navigate = useNavigate();

      const backToBlogs = () => {
         navigate('/blogs', { replace: true });
      };

      return (
         <button type="button" onClick={backToBlogs}>
            Volver a la lista de Blogs
         </button>
      );
   };
```

## Outlet: Nested Routes

Outlet es el componente que nos permite trabajar con nested routes. Nested es como se define a las cosas que están dentro de otras, por ejemplo, en CSS cuando creamos selectores y propiedades dentro de otros selectores y propiedades.

Lo mismo pasa con las nested routes, son rutas dentro de otras rutas hijas de una ruta madre.

Esto nos sirve para que React nos permita renderizar más de una ruta a la vez, teniendo una ruta dentro de otra ruta madre, y esto se puede hacer varias veces.

> Recordatorio, al finalizar el curso, haz una pokedex con todo lo aprendido.