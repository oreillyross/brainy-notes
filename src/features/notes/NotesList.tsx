import { useAppSelector, useAppDispatch } from "app/hooks";
import { supabase } from "client";
import { useEffect } from "react";
import { selectAllNotes, fetchNotes, receivedNotes, Note } from "./notesSlice";
 
const NotesList = () => {
  const notes = useAppSelector(selectAllNotes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    supabase
      .from("notes")
      .select("id, title, description")
      .then((response) => {
        const data = response.data as Note[];
        console.log(data);
        
        dispatch(receivedNotes(data));
      });
  }, []);

  return (
    <>
      <div>
        <h1>My notes go here</h1>
        {notes.map((note) => (
          <p>{note.title}</p>
        ))}
      </div>
    </>
  );
};

export default NotesList;
