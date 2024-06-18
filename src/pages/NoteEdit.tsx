import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Note } from "../types/note";
import { base_url } from "../data/constants";

function NoteEdit() {
  const { noteId } = useParams();
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    const getNote = async () => {
      const response = await fetch(`${base_url}/notes/${noteId}`);
      const noteData = await response.json();
      setNote(noteData);
    };
    getNote();
  }, [noteId]);

  return (
    <div>
      <form>
        <label htmlFor="title">Title</label>
        <input name="title" value={note?.title} />
      </form>
    </div>
  );
}

export { NoteEdit };
