import { Link, Outlet } from "react-router-dom";
import { blogs } from "../../services/blogs";

export const BlogPage = () => {
  const blogsToRender = blogs.map((blog) => (
    <BlogLink
      key={blog.id}
      {...blog}
    />
  ));

  return (
    <>
      <Outlet />
      <h2>Blogs de la comunidad</h2>
      <ul>{blogsToRender}</ul>
    </>
  );
};

const BlogLink = ({ path, title }: { path: string; title: string }) => {
  return (
    <li>
      <Link to={`${path}`}>{title}</Link>
    </li>
  );
};
