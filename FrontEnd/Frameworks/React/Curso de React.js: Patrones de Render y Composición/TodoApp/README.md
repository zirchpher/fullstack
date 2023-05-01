# Bienvenido al curso introductorio de React

## Cambios en la sintaxis de React

-   A partir de la versión 18 de React, se cambió la manera en como React hacía render de un componente

-   Sintaxis Antigua (React versión menor a la 18)

```JavaScript
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
```

-   Sintaxis Nueva (React versión 18 hacia adelante)

```JavaScript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

## Props VS. Children

-   Props: Es la manera que le enviamos argumentos hacia un componente

```JavaScript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // title es una argumento, no una propiedad
    <App title="Fara"></App>
);
```

-   Para usarlo:

```JavaScript

function App(props) {
    return (
        <p>{ props.title }</p>
    );
}
```

-   Children: Es la manera que le enviamos argumentos y etiquetas html hacia un componente

```JavaScript
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // title es una argumento, no una propiedad
    <App>
        <h1> Sois el mejor! </h1>
    </App>
);
```

-   Para usarlo:

```JavaScript

function App(props) {
    return (
        <p>{ props.children }</p>
    );
}
```

## Propiedad Key

-   Nuestra aplicación está tomando forma! Todavía nos faltan algunas cosas, pero… ¿Notaste que en la consola ahora nos aparece este error? Warning: Each children in a list should have a unic "key" prop.

-   Esto es porque cuando renderizamos varios elementos en una lista debemos que pasarle una propiedad especial a cada item, que es key, esta propiedad ayuda a React para mantener un registro de los elementos que han cambiado, y saber cuál elemento es cuál, también es importante que esta propiedad no se repita en ningún otro item.

-   Entonces añadamos esta propiedad:

```JavaScript
<TodoList>
    {todos.map((todo) => (
        <TodoItem
            key={todo.title}
            title={todo.title}
        />
    ))}
</TodoList>
```

-   Con eso ReactDOM sabrá que lo que estará cambiando en el DOM constantemente será todo.title

## Condicionales en clases

-   Esto es muy útil cuando queremos añadir una clase a un elemento dependiendo una condición

```JavaScript
// Ejemplo 1
<span
    //                condición                   claseQueSeAgrega
    // Lectura:    Si esto es True  | entonces | agrega esta clase
    className={` ${props.isCompleted      &&      "Icon-check--active"}`}
>
</span>

// Ejemplo 2
{/* if "todo.isCompleted" is True then add the "icon-check--active" class */}
<span
    className={` icon icon-check
        ${
            props.todo.isCompleted === true && "icon-check--active"
        } `}
    onClick={() => markTodoCompleted(props.todo.title)}
>
    √
</span>
```

## Manejo de Eventos

-   En React, cualquier evento que quieras usar, su nombre empezará con `on` + `NombreDelEvento`. Por ejemplo `onClick={}` `onChanges={}`

-   Usos reales:

    -   Eventos sin argumentos

        ```TypeScript
        const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
            const enteredName = event.target.value;
            console.log(enteredName);
        };
        ```

        ```TypeScript
        function TodoSearch() {
            return (
                <>
                    <input
                        type="text"
                        className="todo-search"
                        placeholder="Cebolla"
                        onChange={inputHandler}
                    />
                </>
            );
        }
        ```

    -   Eventos con argumentos

        ```TypeScript
        const addName = (name: string) => {
            // code ...
        };
        ```

        ```JavaScript
        function TodoSearch() {
            return (
                <>
                    <button onClick={ () => addName("a") } >
                        +
                    </button>
                </>
            );
        }
        ```

## LocalStorage

-   `JSON.stringify` VS. `JSON.parce`

    ```JavaScript
        const exampleText = [
            { name: "Remmian", age: 20 }
        ]
    ```

    -   `JSON.stringify` : Convierte un array a texto

        -   Ejemplo:

        ```JavaScript
        const textoStringifiado = JSON.stringify(exampleText)
        // output: '[{"name":"Remmian","age":20}]'
        ```

    -   `JSON.parce` : Convierte un array a texto

        -   Ejemplo:

        ```JavaScript
        const textAsArray = JSON.parse(textoStringifiado)
        // output: [ { name: "Remmian", age: 20 } ]
        ```

-   Uso de LocalStorage

    -   getItem

        -   localStorage.setItem recibe como argumentos (key, value)
        -   Donde:

            -   `key<string>` : el nombre como vamos a llamar ese espacio a guardar dentro del LS

            -   `value<string>` : Lo que vamos a guardar (Ojo: Solo acepta string, no podemos enviarle otra cosa)

        -   Ejemplo real:

        ```JavaScript
            localStorage.setItem("userName", "Remmian");
        ```

    -   getItem

        -   localStorage.getItem recibe como argumento (key)

        -   Ejemplo real:

            ```JavaScript
                localStorage.getItem("userName");
                // Output: 'Remmian'
            ```

    -   removeItem

        -   localStorage.removeItem recibe como argumento (key)

        -   Ejemplo real:

            ```JavaScript
                localStorage.removeItem("userName")
            ```

## ngIf en React

-   Algo realmente genial de Angular son los `*ngIf`, que dependiendo una condición mostraba o escondía un elemento o componente

-   En React se hace esto así:

```JavaScript
    const isTheGreetingHidden = true;

    return (
        <>
            //Si esto es true   entonces  renderiza esto,    sino     esto
            {isTheGreetingHidden    ?      <p>RAAAA</p>        :    <p>Hola</p>}

            // Si esto es true  entonces  renderiza esto
            {isTheGreetingHidden   &&      <p>RAAAA</p>}
        </>

    );

```

## Revisa los eventos creados

-   Muchas veces creamos muchísimos eventos en nuestra aplicación, pero realmente son necesarios TODOS?

-   Verifica los eventos creados en algún elemento:

```JavaScript
getEventListeners(window)
```

## Revisa los eventos creados

-   El hook de efecto en react nos permite ejecutar un pedazo de código cada vez que necesitemos, a lo largo de la vida de nuestro componente, también cuando se cumplan ciertas condiciones.

-   Algo curioso e importante de saber es que el código dentro de nuestro hook de efecto no se ejecuta como el resto del código, se ejecutará inicialmente justo antes de hacer el renderizado del HTML que resulte de nuestro código de React.

```JavaScript
useEffect(() => {
    console.log("Haz esto cada vez que se renderiza este componente");
});

useEffect(() => {
    console.log("Haz esto SOLO UNA VEZ");
}, []);

useEffect(() => {
    console.log("Haz esto cuando veas que se modifica la variable o estado totalTodos.");
}, [totalTodos]);
```

## React Context: estado compartido

-   Es una forma de tener acceso a datos a través del árbol de componentes sin tener que pasar props manualmente en cada nivel, usando datos globales.

-   Para esto tenemos un proveedor que envolverá a todos los componentes que serán los consumidores de nuestro contexto.

-   Fases:

    -   Crear el contexto de nuestra aplicación
    -   Proveer nuestro contexto con los datos que queremos globales.
    -   Consumir los datos desde cualquier parte de nuestra aplicación.

## Portales: teletransportación de componentes

-   Los portales nos permiten teletransportar componentes a otro nodo de HTML, y seguir comunicándose con otros componentes como si estuviera en el mismo nodo.

-   Se emplean en ocasiones donde los estilos CSS restringen los elementos. Por ejemplo, problemas de apilamiento z-index y desbordamiento overflow.

-   ¿Para qué podemos usarlos?

    -   Modales
    -   Tooltips
    -   Menús flotantes
    -   Widgets

```JavaScript
// Es el mismo import para las versiones mayores o iguales a ReactV18
import ReactDOM from "react-dom";

ReactDOM.createPortal(componente, contenedor)
```

-   OJO:

    -   `Para tener en cuenta en react 18`

    -   Para hacer render del root se usa:

    -   ```JavaScript
        import ReactDOM from 'react-dom/client';
        ```

    -   Pero para hacer render del modal se usa el anterior

    -   ```JavaScript
        import ReactDOM from "react-dom";
        ```

## Truco con React-TypeScript: Averigua su tipado

-   cuando tengas el error del tipado es incorrecto o "any" y no sabes cuál tipado usar, ejecuta lo que quieres hacer en una función

-   Por ejemplo, quieres saber cuál es el tipado de un parámetro llamado event, que está dentro de una función

```JavaScript
// error: parámetro "event" tiene implícidamente el tipo "any"
const handleChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
};
```

-   Entonces, usa toda la función directamente:

```JavaScript
// Si haces hover sobre "event", sobre este mismo aparecerá su tipado
<input
    type="text"
    onChange={(event) => {
        const inputValue = event.target.value;
        setInputValue(inputValue);
    }}
/>
```

-   Ahora simplemente añádelo a la función que daba error

```JavaScript
// error: parámetro "event" tiene implícidamente el tipo "any"
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
};
```
