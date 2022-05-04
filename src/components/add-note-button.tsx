import { Link } from "react-router-dom";

export const AddNoteButton = () => (
  <Link to="/addnote">
    <button
      className="w-32 
      hover:bg-orange-700 
      bg-orange-800 
      text-slate-200 
      
      p-1 m-3 
      border-slate-900
      rounded-full"
      
    >
      Add note
    </button>
  </Link>
);
