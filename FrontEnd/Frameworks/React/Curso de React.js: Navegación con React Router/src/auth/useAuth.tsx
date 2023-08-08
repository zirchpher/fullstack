import { useContext } from 'react';
import { AuthContext } from './auth';

export const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};
