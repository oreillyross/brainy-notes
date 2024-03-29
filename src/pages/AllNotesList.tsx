// import { getNotes } from 'api/notes'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'

const getNotes = () => {
  return [{id: "123", title: "title", created_at: 12334}]
}

interface Props {
  filter: string
}
const AllNotesList = ({ filter }: Props) => {
  const {
    isError,
    data: notes,
    error,
  } = useQuery(['notes', filter], () => getNotes())
  if (isError && error instanceof Error) {
    return <div>{error.message}</div>
  }
  if (notes) {
    // TODO Add zod types
    const sortedNotes = notes.sort((a: any, b: any) =>
      a.created_at > b.created_at ? -1 : 1
    )

    return (
      <div>
        {sortedNotes.map((note) => (
          <div className="" key={note.id}>
            <Link to={`/note/${note.id}`}>{note.title}</Link>
            <span>{formatDistanceToNow(new Date(note.created_at))}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

export default AllNotesList
