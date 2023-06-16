import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

// eslint-disable-next-line react/prop-types
function TodoProvider({ children }) {
  const [inputValue, setInputValue] = useState("");
  const [isTheModalVisible, setModalVisibility] = useState(false);
  const {
    item: todos,
    saveItem: saveTodos,
    isLoading,
    hasError,
  } = useLocalStorage("TODOS_V1", []);

  const completedTodos = todos.filter((todo) => todo.isCompleted).length;
  const totalTodos = todos.length;

  const addTodo = (newTodo) => {
    saveTodos([...todos, { title: newTodo, isCompleted: false }]);
  };

  const toggleCompleteTodo = (todoTitle) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.title === todoTitle);
    const todoIsCompletedValue = newTodos[todoIndex].isCompleted;
    newTodos[todoIndex].isCompleted = !todoIsCompletedValue;
    saveTodos(newTodos);
  };

  const deleteTodo = (todoTitle) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.title === todoTitle);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const todosToRender = todos.filter((todo) => {
    const todoTitle = todo.title.toLocaleLowerCase();
    const textInputValue = inputValue.toLocaleLowerCase();
    return todoTitle.includes(textInputValue);
  });

  return (
    <TodoContext.Provider
      value={{
        completedTodos,
        totalTodos,
        inputValue,
        setInputValue,
        todosToRender,
        toggleCompleteTodo,
        deleteTodo,
        isLoading,
        hasError,
        isTheModalVisible,
        setModalVisibility,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
