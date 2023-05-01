// Partial and Required type
// Algo muy similar a Pick y Omit, pero en este caso, Partial(Todos los datos son opciones) y Required(Todos los datos son obligatorios).

// Partial
interface Todo {
    title: string;
    description: string;
    completed: boolean;
    date?: Date;
}

// Forma 1: Creando instancias directas de otra interfaz
interface TodoPartialInterface extends Partial<Todo> {}
interface TodoRequiredInterface extends Required<Todo> {}

const todoPartialProof: TodoPartialInterface = {
    title: "Learn TypeScript",
};

const todoRequiredProof: TodoRequiredInterface = {
    title: "Learn TypeScript",
    description: "Learn TypeScript from the official documentation",
    completed: false,
    date: new Date(),
};

// Forma 2: Creando instancias directas de la misma interfaz pero agregando el modificador
const todoPartial: Partial<Todo> = {
    title: "Learn TypeScript",
};

const todoRequired: Required<Todo> = {
    title: "Learn TypeScript",
    description: "Learn TypeScript from the official documentation",
    completed: false,
    date: new Date(),
};
