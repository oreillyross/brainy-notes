import { getNotes } from "api/notes";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

interface Props {
  filter: string;
}
const NotesList = ({ filter }: Props) => {
  const {
    isError,
    data: notes,
    error,
  } = useQuery(["notes", filter], () => getNotes(filter));
  if (isError && error instanceof Error) {
    return <div>{error.message}</div>;
  }
  if (notes) {
    // TODO Add zod types
    const sortedNotes = notes.sort((a: any, b: any) =>
      a.created_at > b.created_at ? -1 : 1
    );

    return (
      <div className="grid">
        {sortedNotes.map((note) => (
          <div className="first:mt-4 even:bg-white odd:bg-slate-50 p-2  text-xl text-slate-900 font-medium" key={note.id}>
            <Link to={`/note/${note.id}`}>{note.title}</Link>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default NotesList;
