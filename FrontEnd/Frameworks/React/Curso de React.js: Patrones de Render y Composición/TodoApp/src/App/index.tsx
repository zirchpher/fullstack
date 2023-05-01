// Components
import { TodoHeader } from "../Components/TodoHeader";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton";
import { TodoForm } from "../Components/TodoForm";
import { Modal } from "../Components/Modal";
// Custom Hooks
import { useTodos } from './useTodo'

function App() {
    const {
        todosToDisplayOnScreen,
        markTodoAsCompleted,
        deleteTodo,
        modalVisibility,
        todosCompleted,
        totalTodos,
        addTodo,
        setModalVisibility,
        search,
        setSearch,
    } = useTodos();

    return (
        <>
            <TodoHeader>
                <TodoCounter todosCompleted={todosCompleted} totalTodos={totalTodos} />
                <TodoSearch search={search} setSearch={setSearch} />
            </TodoHeader>


            <TodoList>
                {todosToDisplayOnScreen.map((todo) => (
                    <TodoItem
                        todo={todo}
                        key={todo.title}
                        markTodoAsCompleted={() =>
                            markTodoAsCompleted(todo.title)
                        }
                        deleteTodo={() => deleteTodo(todo.title)}
                    />
                ))}
            </TodoList>

            {modalVisibility && (
                <Modal>
                    <TodoForm addTodo={addTodo} setModalVisibility={setModalVisibility} />
                </Modal>
            )}

            <CreateTodoButton setModalVisibility={setModalVisibility} />
        </>
    );
}

export default App;
