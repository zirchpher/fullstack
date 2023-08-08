import { createContext, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { User } from '../model/user.model';
import { useNavigate } from 'react-router-dom';

interface Context {
  user: User | null;
  signIn: (username: User['username']) => void;
  signOut: () => void;
}

const AuthContext = createContext<Context>({} as Context);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const signIn = (username: User['username']) => {
    setUser({ username: username });
    navigate('/profile');
  };
  const signOut = () => {
    setUser(null);
    navigate('/');
  };

  const contextValue: Context = { user, signIn, signOut };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
