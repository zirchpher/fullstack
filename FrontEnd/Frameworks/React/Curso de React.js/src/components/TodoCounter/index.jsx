import "./index.css";

function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h1 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} TODOS
    </h1>
  );
}

export { TodoCounter };
