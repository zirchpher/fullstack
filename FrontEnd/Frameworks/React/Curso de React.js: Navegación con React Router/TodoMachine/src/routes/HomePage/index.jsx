import { useNavigate } from 'react-router-dom';
import { useTodos } from '../../hooks/useTodos';
import {
  CreateTodoButton,
  TodoCounter,
  TodoHeader,
  TodoItem,
  TodoList,
  TodoSearch,
  TodosLoading,
} from '../../components';

export function HomePage() {
  const navigate = useNavigate();

  const {
    isLoading,
    hasError,
    todosToRender,
    toggleCompleteTodo,
    deleteTodo,
    completedTodos,
    totalTodos,
    inputValue,
    setInputValue,
  } = useTodos();

  const todos = todosToRender.map((todo) => (
    <TodoItem
      key={todo.id}
      title={todo.title}
      isCompleted={todo.isCompleted}
      toggleCompleteTodo={() => toggleCompleteTodo(todo.id)}
      deleteTodo={() => deleteTodo(todo.id)}
      editTodo={navigate('/edit/' + todo.id)}
    />
  ));

  const isInputValueEmpty = inputValue.length === 0;
  const isTodosToRenderEmpty = todosToRender.length === 0;

  return (
    <>
      <TodoHeader isLoading={isLoading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch inputValue={inputValue} setInputValue={setInputValue} />
      </TodoHeader>

      <TodoList>
        {isLoading && <TodosLoading />}
        {hasError && <p>Something went wrong...</p>}
        {!isLoading && isInputValueEmpty && isTodosToRenderEmpty && (
          <p style={{ textAlign: 'center', marginTop: '28px' }}>
            Crea tu primer TODO
          </p>
        )}
        {!isLoading && !isInputValueEmpty && isTodosToRenderEmpty && (
          <p style={{ textAlign: 'center', marginTop: '28px' }}>
            No encontramos ese TODO
          </p>
        )}

        {todos}
      </TodoList>

      <CreateTodoButton navigateToNewTodoPage={() => navigate('/new')} />
    </>
  );
}
