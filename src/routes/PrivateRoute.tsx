import { Redirect, Route } from "react-router-dom";

function PrivateRoute(props: any) {
  const user = null;
  //TODO make this !user to work correctly
  if (user) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...props} />;
  }
}

export { PrivateRoute };
