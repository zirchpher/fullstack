import { TodoForm } from '../../components';

export const NewTodoPage = () => {
  return (
    <TodoForm
      submitEvent={() => {
        console.log('agregando TODO');
      }}
      titleText="Crea tu primer TODO"
      buttonText="Añadir"
    />
  );
};
