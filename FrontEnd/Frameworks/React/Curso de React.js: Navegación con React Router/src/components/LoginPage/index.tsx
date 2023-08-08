import { useState } from 'react';
import { useAuth } from '../../auth/useAuth';

export const LoginPage = () => {
  const { signIn } = useAuth();
  const [username, setUsername] = useState('');

  const handleLogin: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    signIn(username);
  };

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
