import { useAppSelector, useAppDispatch } from "app/hooks";
import { DocumentAddIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { receivedNotes } from "features/notes/notesSlice";

const NotesList = () => {
  const notes = useAppSelector((state) => state.notes);
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  //TODO useEffect to update notes state, then dispatch a action
  useEffect(() => {
     dispatch(receivedNotes)

  });

  return (
    <main className="bg-red-100 p-4 m-6">
      <h1 className="p-12">Notes, you have {notes.length} saved notes</h1>
      <button
        onClick={() => navigate("/notes/new")}
        className="flex w-full justify-center items-center px-4 ml-4 border bg-slate-200 border-slate-800 rounded-full max-w-xs"
      >
        <DocumentAddIcon className="w-6 h-6" />{" "}
        <span className="p-4">Add a note</span>
      </button>
      {notes.map((note) => (
        <div className="border m-6 max-w-2xl p-2" key={note.id}>
          <Link to={`/note/${note.id}`}>
            <h1 className="text-red-600">{note.title}</h1>
          </Link>

          <p>{note.description}</p>
        </div>
      ))}
    </main>
  );
};

export default NotesList;
