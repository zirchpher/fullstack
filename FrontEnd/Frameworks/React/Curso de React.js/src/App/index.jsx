import "./App.css";
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
];

function App() {
  return (
    <>
      <TodoCounter completedTodos={1} totalTodos={4} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            title={todo.title}
            isCompleted={todo.isCompleted}
            key={todo.title}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
