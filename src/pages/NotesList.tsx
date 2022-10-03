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
      <div>
        {sortedNotes.map((note) => (
          <div key={note.id}>
            <Link to={`/note/${note.id}`}>{note.title}</Link>
            <span>{formatDistanceToNow(new Date(note.created_at))}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default NotesList;
