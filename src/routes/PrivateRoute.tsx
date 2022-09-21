import { useAuth } from "contexts/Auth";
import { FC, ReactNode } from "react";
import { Navigate, Route } from "react-router-dom";

interface Props {
  component: React.FC;
}

export const PrivateRoute: FC<Props> = ({ component: Component }) => {
  const { user } = useAuth();
  if (user) {
    return <Component />;
  } else {
    return <Navigate to="/splash" />;
  }
};
