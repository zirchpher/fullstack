import { ITodo } from "./todo.model";

export interface IContext {
    addTodo: (title: ITodo["title"]) => void;
    totalTodos: number;
    todosCompleted: number;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    todosToDisplayOnScreen: ITodo[];
    markTodoAsCompleted: (todoTitle: ITodo["title"]) => void;
    deleteTodo: (todoTitle: ITodo["title"]) => void;
    modalVisibility: boolean;
    setModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}
