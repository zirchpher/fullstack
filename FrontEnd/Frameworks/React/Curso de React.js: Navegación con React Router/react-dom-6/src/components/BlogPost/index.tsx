import { useNavigate, useParams } from "react-router-dom";
import { blogs } from "../../services/blogs";
import { useAuth } from "../../auth/useAuth";
import { ROLES } from "../../model/roles.enum";

export const BlogPost = () => {
  const { path } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const blog = blogs.find((blog) => blog.path === path);
  const backToBlogs = () => {
    navigate("/blogs", { replace: true }); // Usa replace:true para crear un nuevo historial de navegación a partir de la nueva ruta.
  };

  const isAdmin = user?.role === ROLES.ADMIN;
  const isTheAuthor = blog?.author === user?.username;
  const canDeletePost: boolean = isAdmin || isTheAuthor;

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

      {canDeletePost && <button type="button">Eliminar post</button>}
    </div>
  );
};
