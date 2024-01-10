import { Link } from "react-router-dom";

export default function Unauthorized() {
  return (
    <>
      <div>This is not authorized to view this page.</div>
      <div>
        <Link to="/login"> Return to login page</Link>
      </div>
      ;
    </>
  );
}
