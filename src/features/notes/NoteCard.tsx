import type { TNote } from "types/note";
import { Link } from "react-router-dom";
import NoteControlPanel from "./NoteControlPanel";
import { deleteANote } from "api/notesApi";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

interface TProps {
  note: TNote;
}

const NoteCard = ({ note }: TProps) => {
  const { title, description } = note;
  const navigate = useNavigate();

  const deleteNote = () => {
    deleteANote(note.id)
      .then((data) => {
        alert("record deleted");
        navigate("/notes");
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="p-3 border rounded">
      <Link to={`/notes/${note.id}`}>
        <span className="block p-2 text-2xl bg-slate-100 ">{title}</span>
      </Link>
      <ReactMarkdown className="prose lg:prose-xl" children={description} />

      <NoteControlPanel handleDelete={deleteNote} handleEdit={() => {}} />
    </div>
  );
};

export default NoteCard;
