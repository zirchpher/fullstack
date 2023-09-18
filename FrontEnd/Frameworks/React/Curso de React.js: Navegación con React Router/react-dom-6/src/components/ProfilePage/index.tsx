import { useAuth } from '../../auth/useAuth';

export const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <>
      <h2>Good Afternoon</h2>
      <p>Welcome, {user?.username}!</p>
    </>
  );
};
