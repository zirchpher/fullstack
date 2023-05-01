import { ITodo } from "../Model/todo.model";

function getTodosInLocalStorage(NAME_IN_LOCALSTORAGE: string) {
    const itemInLocalStorage = localStorage.getItem(NAME_IN_LOCALSTORAGE);
    let parsedTodos: ITodo[];

    if (itemInLocalStorage) {
        parsedTodos = JSON.parse(itemInLocalStorage);
    }

    // Si no existe, crea un array vacío de esos todos
    else {
        localStorage.setItem(NAME_IN_LOCALSTORAGE, JSON.stringify([]));
        parsedTodos = [];
    }

    return parsedTodos;
}

export { getTodosInLocalStorage };

// const defaultTodos: ITodo[] = [
//     {
//         title: "Learn React",
//         isCompleted: false,
//     },
//     {
//         title: "Learn unit tests",
//         isCompleted: false,
//     },
//     {
//         title: "Break fast",
//         isCompleted: true,
//     },
//     {
//         title: "Read",
//         isCompleted: false,
//     },
// ];
