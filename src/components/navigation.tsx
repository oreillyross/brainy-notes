import "./navigation.scss";

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">Home</Link> |{" "}
      <Link className="navigation__link" to="/login">
        Login
      </Link>{" "}
      | <Link to="/signup">Signup</Link> |{" "}
      <Link className="navigation__link" to="/dashboard">
        Dashboard
      </Link>{" "}
    </div>
  );
}

export { Navigation };
