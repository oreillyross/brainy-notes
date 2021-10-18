import "./navigation.scss";

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/">Home</Link> |{" "}
      <Link className="navigation__link" to="/notes">
        Notes
      </Link>{" "}
    </div>
  );
}

export { Navigation };
