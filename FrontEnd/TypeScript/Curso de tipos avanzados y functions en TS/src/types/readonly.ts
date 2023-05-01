// Lo mismo que los anteriores mi king pero ahora todos los datos son ReadOnly(Solo de lectura), esto quiere decir que no se pueden modificar los datos una vez declarados.

interface Todo {
    title: string;
    description: string;
    completed: boolean;
    date?: Date;
}

// Nota, podemos anidar los tipos de datos, es decir, podemos hacer que sean de tipo Readonly y Partial al mismo tiempo.
interface TodoMixedInterface extends Readonly<Partial<Todo>> {}

function updateTodo(todo: Readonly<Partial<Todo>>) {
    // todo.title = "Update title"; // Error, no se puede modificar el dato
}

// Forma 1: Creando instancias directas de otra interfaz
interface TodoReadonlyInterface extends Readonly<Todo> {}

const todoReadonlyProof: TodoReadonlyInterface = {
    title: "Learn TypeScript",
    description: "Learn TypeScript from the official documentation",
    completed: false,
    date: new Date(),
};

// Forma 2: Creando instancias directas de la misma interfaz pero agregando el modificador
const todoReadonly: Readonly<Todo> = {
    title: "Learn TypeScript",
    description: "Learn TypeScript from the official documentation",
    completed: false,
};
