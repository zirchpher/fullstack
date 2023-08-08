import { useParams, useNavigate } from 'react-router-dom';
import { blogs } from '../../services/blogs';

export const BlogPost = () => {
  const { path } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((blog) => blog.path === path);
  const backToBlogs = () => {
    // navigate('/blogs');
    navigate('/blogs', { replace: true }); // Usa replace:true para crear un nuevo historial de navegación a partir de la nueva ruta.
  };

  return (
    <div>
      <h2>BlogPost</h2>
      <button type="button" onClick={backToBlogs}>
        Volver a la lista de Blogs
      </button>
      <div>
        <p>Author: {blog?.author}</p>
        <p>{blog?.title}</p>
        <p>{blog?.content}</p>
      </div>
    </div>
  );
};
