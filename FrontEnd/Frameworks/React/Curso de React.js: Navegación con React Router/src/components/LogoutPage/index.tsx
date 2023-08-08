import { useAuth } from "../../auth/useAuth";

export const LogoutPage = () => {
  const { signOut } = useAuth();
  const handleLogout: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    signOut();
  };

  return (
    <>
      <h1>Logout</h1>

      <form onSubmit={handleLogout}>
        <label
          style={{
            display: "block",
          }}
        >
          ¿Segura(o) que quieres salir?
        </label>

        <button type="submit">Salir</button>
      </form>
    </>
  );
};
