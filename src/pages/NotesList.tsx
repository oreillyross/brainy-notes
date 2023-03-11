<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

interface Props {
  filter: string;
}
const NotesList = ({ filter }: Props) => {
  return <div className="grid">List of notes</div>;
};
=======
import { getNotes } from 'api/notes'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'

const NotesList = () => {
  const { isError, data: notes, error } = useQuery(['notes'], () => getNotes())
  if (isError && error instanceof Error) {
    return <div>{error.message}</div>
  }
  if (notes) {
    // TODO Add zod types
    const sortedNotes = notes.sort((a: any, b: any) =>
      a.created_at > b.created_at ? -1 : 1
    )

    return (
      <div className='grid'>
        {sortedNotes.map((note) => (
          <div
            className='first:mt-4 even:bg-white odd:bg-slate-50 p-2  text-xl text-slate-900 font-medium'
            key={note.id}
          >
            <Link to={`/note/${note.id}`}>{note.title}</Link>
          </div>
        ))}
      </div>
    )
  }
  return null
}
>>>>>>> 35d023546d1f9dec5cc641a7c30d260f446c7908

export default NotesList
