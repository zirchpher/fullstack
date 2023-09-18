import { NavLink } from 'react-router-dom';
import { useAuth } from '../../auth/useAuth';

export const Header = () => {
  const routes = [
    { path: '/', title: 'Home', isPrivateRoute: false },
    { path: '/blogs', title: 'Blogs', isPrivateRoute: false },
    {
      path: '/login',
      title: 'Login',
      isPrivateRoute: false,
      isDynamicPublic: true,
    },
    { path: '/logout', title: 'Logout', isPrivateRoute: true },
    { path: '/profile', title: 'Profile', isPrivateRoute: true },
  ];

  const { user } = useAuth();
  const isLoggedIn = user ? true : false;

  const renderRoutes = () =>
    routes.map(({ path, title, isPrivateRoute, isDynamicPublic }) => {
      if (isDynamicPublic && isLoggedIn) return null;
      if (isPrivateRoute && !isLoggedIn) return null;

      return (
        <li key={path}>
          <NavLink
            to={path}
            style={({ isActive }) => ({
              color: isActive ? 'red' : 'blue',
            })}
          >
            {title}
          </NavLink>
        </li>
      );
    });

  return (
    <header>
      <nav>
        <ul>{renderRoutes()}</ul>
      </nav>
    </header>
  );
};
