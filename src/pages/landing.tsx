import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      Welcome to the world's best note taking app. Lets get started by adding
      your first note.
      <Link to="/addnote">
        <button>Add note</button>
      </Link>
    </div>
  );
};

export { LandingPage };
