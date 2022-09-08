import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import type { TNote } from "types/note";
import NoteControlPanel from "./NoteControlPanel";
import { fetchNotes, deleteANote } from "api/notesApi";
import { useNavigate } from "react-router-dom";


const NoteLine = ({ note }: { note: TNote }) => {
  
  
  const navigate = useNavigate()

  const deleteNote = () => {
    deleteANote(note.id)
      .then((data) => {
        alert("record deleted");
      })
      .catch((error) => alert(error));
  };

  const editNote = () => {
      navigate(`/note/${note.id}/edit`)
  }
  return (
    <li className="grid grid-cols-2 text-xl border p-4 m-2" key={note.id}>
      <Link to={`/notes/${note.id}`}>{note.title}</Link>
      <NoteControlPanel handleDelete={deleteNote} handleEdit={editNote}/>
    </li>
  );
};

const NotesList = () => {
  const { data: notes } = useQuery("notes", fetchNotes);

  return (
    <ul className="p-4 border m-4">
      {notes?.map((note) => (
        <NoteLine key={note?.id} note={note} />
      ))}
    </ul>
  );
};

export default NotesList;
