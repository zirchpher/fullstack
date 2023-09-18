import { useEffect, useState } from 'react';
import { useAuth } from '../../auth/useAuth';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const { signIn, user } = useAuth();
  const [username, setUsername] = useState('');

  const isLoggedIn = user ? true : false;
  const navigate = useNavigate();
  const handleLogin: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    signIn(username);
  };

  useEffect(() => {
    if (isLoggedIn) return navigate('/profile');
  });

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleLogin}>
        <label
          htmlFor="username"
          style={{
            display: 'block',
          }}
        >
          Ingresa tu username
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="juanito"
          name="username"
          id="username"
        />

        <button type="submit">Entrar</button>
      </form>
    </>
  );
};
