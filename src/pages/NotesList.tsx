import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import NoteControlPanel from "../../.ARCHIVE/features/notes/NoteControlPanel";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";


const NotesList = () => {

  return (
    <ul className="p-4 border m-4">
    This is where the list of notes goes
    </ul>
  );
};

export default NotesList;
