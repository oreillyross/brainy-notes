import type { Note } from "types/note";
import { Link } from "react-router-dom";

interface Props {
  note: Note;
}

const NoteCard = ({ note }: Props) => {
  const { title, description } = note;
  return (
    <div className="p-3 border rounded">
      <Link to={`/notes/${note.id}`}>
        <span className="block p-2 text-2xl bg-slate-100 ">{title}</span>
      </Link>
      <div className="p-4 "> {description.slice(1, 150)}... </div>
    </div>
  );
};

export default NoteCard;
