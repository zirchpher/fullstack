import { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export function useTodos() {
  const [inputValue, setInputValue] = useState('');
  const [isTheModalVisible, setModalVisibility] = useState(false);

  const {
    item: todos,
    saveItem: saveTodos,
    isLoading,
    hasError,
  } = useLocalStorage('TODOS_V1', []);

  const completedTodos = todos.filter((todo) => todo.isCompleted).length;
  const totalTodos = todos.length;

  const addTodo = (newTodo) => {
    const id = generateId();
    saveTodos([...todos, { id, title: newTodo, isCompleted: false }]);
  };

  const toggleCompleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    const todoIsCompletedValue = newTodos[todoIndex].isCompleted;
    newTodos[todoIndex].isCompleted = !todoIsCompletedValue;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const todosToRender = todos.filter((todo) => {
    const todoTitle = todo.title.toLocaleLowerCase();
    const textInputValue = inputValue.toLocaleLowerCase();
    return todoTitle.includes(textInputValue);
  });

  return {
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
  };
}

/**
 * Generates a unique ID.
 *
 * @return {string} The generated ID.
 */
const generateId = () => {
  return Math.random().toString(36).substring(2, 10);
};
