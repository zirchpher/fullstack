import "./App.css";
import { useState } from "react";
import {
  CreateTodoButton,
  TodoCounter,
  TodoItem,
  TodoList,
  TodoSearch,
} from "../components";

const defaultTodos = [
  { title: "Cocinar Brocolío", isCompleted: false },
  { title: "Salir a correr", isCompleted: true },
  { title: "Almorzar", isCompleted: true },
  { title: "Ver One Piece", isCompleted: false },
  { title: "Tocar una canción", isCompleted: true },
];

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(defaultTodos);

  const completedTodos = todos.filter((todo) => todo.isCompleted).length;
  const totalTodos = todos.length;

  const toggleCompleteTodo = (todoTitle) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.title === todoTitle);
    const todoIsCompletedValue = newTodos[todoIndex].isCompleted;
    newTodos[todoIndex].isCompleted = !todoIsCompletedValue;
    setTodos(newTodos);
  };

  const deleteTodo = (todoTitle) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.title === todoTitle);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  const todosToRender = todos.filter((todo) => {
    const todoTitle = todo.title.toLocaleLowerCase();
    const textInputValue = inputValue.toLocaleLowerCase();
    return todoTitle.includes(textInputValue);
  });

  return (
    <>
      <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
      <TodoSearch inputValue={inputValue} setInputValue={setInputValue} />

      <TodoList>
        {todosToRender.map((todo) => (
          <TodoItem
            title={todo.title}
            isCompleted={todo.isCompleted}
            key={todo.title}
            toggleCompleteTodo={() => toggleCompleteTodo(todo.title)}
            deleteTodo={() => deleteTodo(todo.title)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
