# Explicación de qué hay dentro de cada carpeta de la clase

## Índice

-   [Custom Elements](#custom-elements)
-   [Templates](#templates)
-   [Shadow DOM](#shadow-dom)
-   [Content Slot](#content-slot)
-   [Multi Content Slot](#multi-content-slot)
-   [Atributos](#atributos)
-   [Attribute Changed Callback](#attribute-changed-callback)
-   [Disconnected Callback](#disconnected-callback)
-   [:HOST](#host)
-   [::Slotted](#slotted)

### Custom Elements

-   Creamos elementos personalizados HTML5

### Templates

-   Hacemos uso de la etiqueta template para crear elementos fragmentados y renderizarlos una única vez en el DOM

### Shadow DOM

-   Con esta implementación podremos solucionar los problemas con los estilos css que se rescriben por temas de especificidad.

-   Generando como un encapsulado, un dom independiente dentro de nuestro dom global, esto que quiere decir que todo lo que coexista en nuestro dom independiente no va existir dentro de nuestro dom global.

### Content Slot

-   Básicamente el "content slot" nos permite darle interactividad a nuestro componente, pudiendo dejar entrar información de manera dinámica.

### Multi Content Slot

-   Hace lo mismo que el anterior, solo que ahora permite ingresar varios "slot" y hacer aún más dinámico.

### Atributos

-   Cuando creamos un elemento imagen "HTML", para poder decirle la ubicación de la imagen, usamos el atributo "src", esto es algo muy parecido, simplemente que nosotros vamos a crear nuestros propios atributos en nuestras propias etiquetas. ejemplo:

```JavaScript
<my-element title="" age="" faraon=""> </my-element>
```

### Attribute Changed Callback

-   Lo anterior fue genial, ¿verdad?, pero espera, esa no es la manera correcta de conectar atributos a un "Web Component", sino que existe su propia función que hace el trabajo optimizado.

### Disconnected Callback

-   Bueno, ya hicimos un uso de nuestro "Web Component", pero ¿qué hacemos si ya no hacemos uso del WC o si simplemente ya no lo queremos dentro del DOM?. Simplemente elimínalo y libera espacio en memoria.

-   disconnected callback nos servirá para deslindar de eventos a nuestros componente, dentro de esa función podremos retirarlos para liberar espacio en memoria.

### :HOST

-   :HOST es una pseudoclase que utilizaremos para darle estilos a nuestro componente web (no se trata necesariamente de los estilos visuales).

-   :HOST solo le dará estilos a la etiqueta madre (La primera etiqueta de todo el WC)

### ::Slotted

-   Es un pseudoelemento que sirve para poder agregar estilos específicos a todo el contenido dinámico que venga desde fuera del componente y se vaya a colocar en las etiquetas slot.

### CSS custom properties

-   Como se ha comentado en anteriores clases generar un componente reutilizable implica que no tenemos que ir hasta el código de este y cambiarlo, entonces lo que haremos es re asignar nuestros estilos por fuera.

-   Con shadow dom esta idea que se plantea de poder cambiar nuestros estilos por fuera no es posible, pero esto en cierto punto es mentira ya que podremos hacerlo atraves de las Custom Properties que son unas variables en donde las generamos y de valor estas tienen un estilo.

-   Lo que haremos es definir variables en nuestros host y luego agregárselas a nuestros elementos que estan dentro de los componentes para probarlas.

### Utilizando componentes de terceros

-   Ojito con esto, nosotros podemos usar componentes hechos por terceros
-   Página para buscar componentes: https://www.webcomponents.org/
