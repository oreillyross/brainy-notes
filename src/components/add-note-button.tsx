import { Link } from "react-router-dom";
import "./add-note-button.scss"


export const AddNoteButton = () => (
  <Link to="/addnote">
    <button className="addnotebutton">Add note</button>
  </Link>
);
