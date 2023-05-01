import { useState } from "react";
// Model
import { ITodo } from "../Model/todo.model";
// Services
import { getTodosInLocalStorage } from "../Services/localstorage.service";
import { findTodoIndex, getTodosCompleted } from "../Services/todos.service";

function useTodos() {
    const TODO_NAME_IN_LOCALSTORAGE = "TODOS_V1";

    const parsedTodos = getTodosInLocalStorage("TODOS_V1");

    // States
    const [search, setSearch] = useState("");
    const [todos, setTodos] = useState(parsedTodos);
    const [modalVisibility, setModalVisibility] = useState(false);

    // Functions
    const totalTodos = todos.length;
    const todosCompleted = getTodosCompleted(todos);

    const saveTodos = (newTodos: ITodo[]) => {
        const stringifiedTodos = JSON.stringify(newTodos);
        localStorage.setItem(TODO_NAME_IN_LOCALSTORAGE, stringifiedTodos);
        setTodos(newTodos);
    };

    const markTodoAsCompleted = (todoTitle: ITodo["title"]) => {
        const todoIndex = findTodoIndex(todos, todoTitle);
        const newTodos = [...todos];
        newTodos[todoIndex].isCompleted = true;
        saveTodos(newTodos);
    };

    const addTodo = (title: ITodo["title"]) => {
        const newTodos = [...todos];
        newTodos.push({
            title,
            isCompleted: false,
        });
        saveTodos(newTodos);
    };

    const deleteTodo = (todoTitle: ITodo["title"]) => {
        const todoIndex = findTodoIndex(todos, todoTitle);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    // taks swapping depending on whether it searches inputs or not
    let todosToDisplayOnScreen: ITodo[];

    if (search.length >= 1) {
        todosToDisplayOnScreen = todos.filter((todo) => {
            const wordToSearch = search.toLowerCase();
            const todoTitle = todo.title.toLowerCase();
            return todoTitle.includes(wordToSearch);
        });
    } else {
        todosToDisplayOnScreen = todos;
    }

    return {
        addTodo,
        totalTodos,
        todosCompleted,
        search,
        setSearch,
        todosToDisplayOnScreen,
        markTodoAsCompleted,
        deleteTodo,
        modalVisibility,
        setModalVisibility,
    };
}


// const TodoContext = createContext<IContext | null>(null);

// function TodoProvider({ children }: Props) {
//     const TODO_NAME_IN_LOCALSTORAGE = "TODOS_V1";

//     const parsedTodos = getTodosInLocalStorage("TODOS_V1");

//     // States
//     const [search, setSearch] = useState("");
//     const [todos, setTodos] = useState(parsedTodos);
//     const [modalVisibility, setModalVisibility] = useState(false);

//     // Functions
//     const totalTodos = todos.length;
//     const todosCompleted = getTodosCompleted(todos);

//     const saveTodos = (newTodos: ITodo[]) => {
//         const stringifiedTodos = JSON.stringify(newTodos);
//         localStorage.setItem(TODO_NAME_IN_LOCALSTORAGE, stringifiedTodos);
//         setTodos(newTodos);
//     };

//     const markTodoAsCompleted = (todoTitle: ITodo["title"]) => {
//         const todoIndex = findTodoIndex(todos, todoTitle);
//         const newTodos = [...todos];
//         newTodos[todoIndex].isCompleted = true;
//         saveTodos(newTodos);
//     };

//     const addTodo = (title: ITodo["title"]) => {
//         const newTodos = [...todos];
//         newTodos.push({
//             title,
//             isCompleted: false,
//         });
//         saveTodos(newTodos);
//     };

//     const deleteTodo = (todoTitle: ITodo["title"]) => {
//         const todoIndex = findTodoIndex(todos, todoTitle);
//         const newTodos = [...todos];
//         newTodos.splice(todoIndex, 1);
//         saveTodos(newTodos);
//     };

//     // taks swapping depending on whether it searches inputs or not
//     let todosToDisplayOnScreen: ITodo[];

//     if (search.length >= 1) {
//         todosToDisplayOnScreen = todos.filter((todo) => {
//             const wordToSearch = search.toLowerCase();
//             const todoTitle = todo.title.toLowerCase();
//             return todoTitle.includes(wordToSearch);
//         });
//     } else {
//         todosToDisplayOnScreen = todos;
//     }

//     return (
//         // Lo vamos a utilizar para envolver un componente
//         // Todas las propiedades que deseamos compartir deben estar en value
//         <TodoContext.Provider
//             value={{
//                 addTodo,
//                 totalTodos,
//                 todosCompleted,
//                 search,
//                 setSearch,
//                 todosToDisplayOnScreen,
//                 markTodoAsCompleted,
//                 deleteTodo,
//                 modalVisibility,
//                 setModalVisibility,
//             }}
//         >
//             {children}
//         </TodoContext.Provider>
//     );
// }

export { useTodos };
