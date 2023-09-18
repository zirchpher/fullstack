import { useAuth } from "../useAuth";
import { Navigate } from "react-router-dom";
import { RoutesModel } from "../../model/routes.enum";

interface Props {
  children: JSX.Element | JSX.Element[];
  routeToNavigate: RoutesModel;
}

export const ProtectAuth = ({ children, routeToNavigate }: Props) => {
  const { user } = useAuth();
  if (user === null) return <Navigate to={routeToNavigate} />;

  return children;
};
