import './index.css';

function TodoCounter({ completedTodos, totalTodos, isLoading }) {
  return (
    <h1 className={`TodoCounter ${isLoading && 'TodoCounter--loading'}`}>
      Has completado {completedTodos} de {totalTodos} TODOS
    </h1>
  );
}

export { TodoCounter };
