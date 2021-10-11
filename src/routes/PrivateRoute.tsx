import { Redirect, Route } from "react-router-dom";

function Privateroute(props: any) {
  const user = null;

  if (!user) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...props} />;
  }
}

export { Privateroute };
