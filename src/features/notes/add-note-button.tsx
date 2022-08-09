import { Link } from "react-router-dom";

export const AddNoteButton = () => (
  <Link to="/notes/new">
    <button
      className="
      text-6xl
      text-grey-800 
      p-1 m-3 
      rounded-full"
    >
      +
    </button>
  </Link>
);
