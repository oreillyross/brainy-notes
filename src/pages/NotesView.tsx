// import { getNotes } from 'api/notes'
// import { useQuery } from "@tanstack/react-query";
// import { Link } from "react-router-dom";
// import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { base_url } from "../data/constants";
import { Link } from "react-router-dom";

interface Note {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

export const NotesView = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const get = async () => {
      try {
        const response = await fetch(base_url + "/notes");
        if (!response.ok) {
          throw Error("Network response not ok: " + response.statusText);
        }
        const notes: Note[] = await response.json();
        setNotes(notes);
      } catch (error) {
        console.error(error);
      }
    };
    get();
  }, []);

  return (
    <div className="grid">
      <ul>
        {notes.map((note, idx) => {
          return (
            <li className="border-2 px-2 py-2 flex justify-between">
              <span>{idx}</span>
              <span>{note.title}</span>
              <span>
                <Link to={`/notes/${note.id}`}>edit</Link>
              </span>
              <span>X</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NotesView;
