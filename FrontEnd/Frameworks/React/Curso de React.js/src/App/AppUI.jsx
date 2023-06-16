import { useContext } from "react";
import {
  CreateTodoButton,
  Modal,
  TodoCounter,
  TodoForm,
  TodoItem,
  TodoList,
  TodoSearch,
  TodosLoading,
} from "../components";
import { TodoContext } from "../context/TodoContext";

function AppUI() {
  const {
    isLoading,
    hasError,
    todosToRender,
    toggleCompleteTodo,
    deleteTodo,
    isTheModalVisible,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />

      <TodoSearch />

      <TodoList>
        {isLoading && <TodosLoading />}
        {hasError && <p>Something went wrong...</p>}
        {!isLoading && !hasError && todosToRender.length === 0 && (
          <p>Create your first TODO</p>
        )}

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

      {isTheModalVisible && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}

export { AppUI };

// const defaultTodos = [
//   { title: "Cocinar Brocolío", isCompleted: false },
//   { title: "Salir a correr", isCompleted: true },
//   { title: "Almorzar", isCompleted: true },
//   { title: "Ver One Piece", isCompleted: false },
//   { title: "Tocar una canción", isCompleted: true },
// ];
