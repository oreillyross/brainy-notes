import { Link } from "react-router-dom";



export const AddNoteButton = () => (
  <Link to="/addnote">
    <button className="addnotebutton">Add note</button>
  </Link>
);
