import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import type { TNote } from "types/note";
import NoteControlPanel from "./NoteControlPanel";
import { fetchNotes, deleteANote } from "api/notesApi";

const DeleteButton = () => (
  <div className="bg-slate-200 w-12 text-center">
    <button>-</button>
  </div>
);

const NoteLine = ({ note }: { note: TNote }) => {
  const deleteNote = () => {
    deleteANote(note.id)
      .then((data) => {
        alert("record deleted");
      })
      .catch((error) => alert(error));
  };
  return (
    <li className="grid grid-cols-2 text-xl border p-4 m-2" key={note.id}>
      <Link to={`/notes/${note.id}`}>{note.title}</Link>
      <NoteControlPanel handleClick={deleteNote} />
    </li>
  );
};

const NotesList = () => {
  const { data: notes } = useQuery("notes", fetchNotes);

  return (
    <ul className="p-4 border m-4">
      {notes?.map((note) => (
        <NoteLine note={note} />
      ))}
    </ul>
  );
};

export default NotesList;
