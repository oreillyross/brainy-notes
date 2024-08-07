// import { getNotes } from 'api/notes'
// import { useQuery } from "@tanstack/react-query";
// import { Link } from "react-router-dom";
// import { formatDistanceToNow } from "date-fns";
import { base_url } from "../data/constants";
import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {Toaster, toast} from "react-hot-toast"

interface Note {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

async function retrieveNotes() {
  const response = await fetch(base_url + "/notes", {mode: 'no-cors'})
  return await response.json()
}

async function deleteNote(id: string) {
  const response = await fetch(`${base_url}/notes${id}`, {method: "DELETE"})
  if (!response.ok) {
    throw new Error(`oops`)
  }
  return `Note deleted`
  
}

export const NotesView = () => {
  const {data, error, isLoading } = useQuery({
    queryKey: ["allNotes"],
    queryFn: retrieveNotes,
  });

  const queryClient = useQueryClient()
  
  // const mutation = useMutation<string, Error, string>(deleteNote, {})
  
  if (error) {
    return <div>Error {error.message}</div>
  }

  if (isLoading) {
    return <div>Loading notes...</div>
  }
  
  return (
    <div className="grid">
    <Toaster/>
      <ul>
        {data.map((note: Note, idx: number) => {
          return (
            <li
              key={note.id}
              className="border-2 px-2 py-2 flex justify-between"
            >
              <span>{idx}</span>
              <span>{note.title}</span>
              <span>
                <Link to={`/notes/${note.id}`}>edit</Link>
              </span>
              <button
                onClick={async (e) => {
                  e.preventDefault();
                  const response = await fetch(`${base_url}/notes/${note.id}`, {
                    method: "DELETE",
                  });
                  if (!response.ok) {
                    throw new Error("failed to delete the note");
                  }
                  queryClient.invalidateQueries({queryKey: ["allNotes"]})
                  toast.success("Deleted note successfully")
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      <Link to="/home">Go back home</Link>
    </div>
  );
};

export default NotesView;
