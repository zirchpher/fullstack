import { createContext, useState } from "react";
import type { FC, PropsWithChildren } from "react";
import { User } from "../model/user.model";
import { useNavigate } from "react-router-dom";
import { ADMIN_LIST } from "../services/admin-list";
import { ROLES } from "../model/roles.enum";

interface Context {
  user: User | null;
  signIn: (username: User["username"]) => void;
  signOut: () => void;
}

const AuthContext = createContext<Context>({} as Context);

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  const signIn = (username: User["username"]) => {
    const user = ADMIN_LIST.find((list) => list.username === username);
    const role: ROLES = user?.role ?? ROLES.USER;
    setUser({ username: username, role: role });
    navigate("/profile");
  };

  const signOut = () => {
    setUser(null);
    navigate("/");
  };

  const contextValue: Context = { user, signIn, signOut };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
