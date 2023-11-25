import { TodoForm } from '../../components';

export const EditTodoPage = () => {
  return (
    <TodoForm
      submitEvent={() => {
        console.log('editando TODO');
      }}
      titleText="Edita tu TODO"
      buttonText="Editar"
    />
  );
};
