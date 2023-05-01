import { useState } from "react";

import {
    CreateTodoButtom,
    TodoCounter,
    TodoItem,
    TodoList,
    TodoSearch,
} from "../components";

// const defaultTodos = [
//     { text: "Cortar cebolla", isCompleted: false },
//     { text: "Tormar el curso de intro a react", isCompleted: true },
//     { text: "Llorar con la llorona", isCompleted: false },
// ];

function App() {
    const todosInLS = localStorage.getItem("TODOS_V1");
    let parsedTodos;

    if (!todosInLS) {
        localStorage.setItem("TODOS_V1", JSON.stringify([]));
        parsedTodos = [];
    } else {
        parsedTodos = JSON.parse(todosInLS);
    }

    const [inputValue, setInputValue] = useState("");

    // Todos Handler
    const [todos, setTodos] = useState(parsedTodos);
    const todosCompleted = todos.filter((todo) => todo.isCompleted).length;
    const totalTodos = todos.length;

    let todosToShow;
    // Se ha hecho una búqueda
    if (inputValue.length >= 1) {
        todosToShow = todos.filter((todo) => {
            const todoText = todo.text.toLocaleLowerCase();
            const todoTextToSearch = inputValue.toLocaleLowerCase();
            return todoText.includes(todoTextToSearch);
        });
    }
    // Si no se ha hecho una búsqueda, retorna todos los todos
    else {
        todosToShow = todos;
    }

    const saveTodosInLS = (newTodos) => {
        const newTodosStringified = JSON.stringify(newTodos);
        localStorage.setItem("TODOS_V1", newTodosStringified);
        setTodos(newTodos);
    };

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].isCompleted = true;
        saveTodosInLS(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodosInLS(newTodos);
    };

    return (
        <>
            <TodoCounter
                totalTodos={totalTodos}
                todosCompleted={todosCompleted}
            />

            <TodoSearch inputValue={inputValue} setInputValue={setInputValue} />

            <TodoList>
                {todosToShow.map((todo) => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        isCompleted={todo.isCompleted}
                        completeTodo={() => completeTodo(todo.text)}
                        deleteTodo={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            <CreateTodoButtom />
        </>
    );
}

export default App;
