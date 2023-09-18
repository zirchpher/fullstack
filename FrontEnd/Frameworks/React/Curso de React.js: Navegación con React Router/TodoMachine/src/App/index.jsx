import { useTodos } from "../hooks/useTodos";
import {
  CreateTodoButton,
  Modal,
  TodoCounter,
  TodoForm,
  TodoHeader,
  TodoItem,
  TodoList,
  TodoSearch,
  TodosLoading,
} from "../components";

export function App() {
  const {
    isLoading,
    hasError,
    todosToRender,
    toggleCompleteTodo,
    deleteTodo,
    isTheModalVisible,
    completedTodos,
    totalTodos,
    inputValue,
    setInputValue,
    setModalVisibility,
    addTodo,
  } = useTodos();

  const todos = todosToRender.map((todo) => (
    <TodoItem
      title={todo.title}
      isCompleted={todo.isCompleted}
      key={todo.title}
      toggleCompleteTodo={() => toggleCompleteTodo(todo.title)}
      deleteTodo={() => deleteTodo(todo.title)}
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
        {(!isLoading && isInputValueEmpty && isTodosToRenderEmpty) &&
          (
            <p style={{ textAlign: "center", marginTop: "28px" }}>
              Crea tu primer TODO
            </p>
          )}
        {!isLoading && !isInputValueEmpty && isTodosToRenderEmpty && (
          <p style={{ textAlign: "center", marginTop: "28px" }}>
            No encontramos ese TODO
          </p>
        )}

        {todos}
      </TodoList>

      <CreateTodoButton setModalVisibility={setModalVisibility} />

      {isTheModalVisible && (
        <Modal>
          <TodoForm setModalVisibility={setModalVisibility} addTodo={addTodo} />
        </Modal>
      )}
    </>
  );
}
