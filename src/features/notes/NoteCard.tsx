import type { TNote } from "types/note";
import { Link } from "react-router-dom";
import NoteControlPanel from "./NoteControlPanel";

interface TProps {
  note: TNote;
}

const NoteCard = ({ note }: TProps) => {
  const { title, description } = note;
  return (
    <div className="p-3 border rounded">
      <Link to={`/notes/${note.id}`}>
        <span className="block p-2 text-2xl bg-slate-100 ">{title}</span>
      </Link>
      <p className="p-4 "> {description.slice(1, 150)}... </p>
      <NoteControlPanel handleClick={() => {}} />
    </div>
  );
};

export default NoteCard;
