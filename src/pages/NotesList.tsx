import { getFilteredNotes, getNotes } from "api/notes";
import { supabase  } from "api/supabase";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


interface Props {
  filter: string;
}
const NotesList = ({ filter }: Props) => {
  // const filteredNotes = useQuery("filtered-notes", getFilteredNotes(filter))
  const params =  useParams()
  console.log(params);
  
  const {
    isLoading,
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
      a.title < b.title ? -1 : 1
    );

    return (
      <div>
        {sortedNotes.map((note) => (
          <div key={note.id}>
            {note.id}
            <Link to={`/note/${note.id}`}>{note.title}</Link>
          </div>
        ))}
      </div>
    );
  }
  return null
};

export default NotesList;
