import "./index.css";

/* eslint-disable react/prop-types */
function TodoCounter({ totalTodos, completedTodos }) {
  return (
    <h1 className="TodoCounter">
      Has completado {completedTodos} de {totalTodos} TODOS
    </h1>
  );
}

export { TodoCounter };
