import { useAppSelector, useAppDispatch } from "app/hooks";
import { useDispatch } from "react-redux";
import { DocumentAddIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { supabase } from "client";
import { selectAllNotes } from "features/notes/notesSlice";
import { Note } from "types/note";

const NotesList = () => {
  const notes = useAppSelector(selectAllNotes) as any;
  console.log(typeof notes);
  
  const numberOfNotes: number = notes ? notes.notes.length : 0;

  return (
    <main>
      <h1 className="p-12">Notes, you have {numberOfNotes} saved notes</h1>
      <button className="flex w-full justify-center items-center px-4 ml-4 border bg-slate-200 border-slate-800 rounded-full max-w-xs">
        <DocumentAddIcon className="w-6 h-6" />{" "}
        <span className="p-4">Add a note</span>
      </button>
      {/* {notes.map((note) => (
        <div className="border m-6 max-w-2xl p-2" key={note.id}>
          <Link to={`/note/${note.id}`}>
            <h1 className="text-red-600">{note.title}</h1>
          </Link>

          <p>{note.description}</p>
        </div>
      ))} */}
    </main>
  );
};

export default NotesList;
