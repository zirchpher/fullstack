import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { NewTodoPage } from './NewTodoPage';
import { EditTodoPage } from './EditTodoPage';
import { Error404 } from './Error404';

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewTodoPage />} />
        <Route path="/edit/:id" element={<EditTodoPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  );
};
