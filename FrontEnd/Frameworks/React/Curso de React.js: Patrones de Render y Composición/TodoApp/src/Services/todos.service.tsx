import { ITodo } from "../Model/todo.model";

function getTodosCompleted(todos: ITodo[]) {
    const todosCompletedArray = todos.filter(
        (todo) => todo.isCompleted === true
    );
    const numberOfTodosCompleted = todosCompletedArray.length;
    return numberOfTodosCompleted;
}

function findTodoIndex(todos: ITodo[], todoTitle: ITodo["title"]) {
    const todoIndex = todos.findIndex((todo) => {
        return todo.title === todoTitle;
    });

    return todoIndex;
}

export { getTodosCompleted, findTodoIndex };
