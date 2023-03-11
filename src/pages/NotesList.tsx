// import { getNotes } from 'api/notes'
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const NotesList = () => {
  // const { isError, data: notes, error } = useQuery(["notes"], () => getNotes());

  return (
    <div className="grid">
      {/* {sortedNotes.map((note) => (
          <div
            className='first:mt-4 even:bg-white odd:bg-slate-50 p-2  text-xl text-slate-900 font-medium'
            key={note.id}
          >
            <Link to={`/note/${note.id}`}>{note.title}</Link>
          </div>
        ))} */}
    </div>
  );
};

export default NotesList;
