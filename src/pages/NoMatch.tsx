import { Link } from "react-router-dom";

export default function NoMatch() {
  return (
    <div>
      Page not found, click <Link to="/splash">here </Link>to return to the home
      page
    </div>
  );
}
