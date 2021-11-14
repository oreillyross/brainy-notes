import { useNavigate, Route } from "react-router-dom";

function PrivateRoute(props: any) {
  const user = null;
  const navigate = useNavigate()
  //TODO make this !user to work correctly
  if (user) {
    navigate("/login");
  } else {
    return <Route {...props} />;
  }
}

export { PrivateRoute };
