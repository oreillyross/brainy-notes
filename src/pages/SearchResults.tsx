import "./SearchResults.scss";
import * as React from "react";
import { Link } from "react-router-dom";
import * as demoNotes from "demo/search_results.json";

type NoteType = {
  id: string;
  title: string;
  description: string;
  url: string;
};

function SearchResults() {
  const [notes, setNotes] = React.useState<NoteType[]>([]);

  React.useEffect(() => {
    const notesFromStorage = localStorage.getItem("notes");
    if (notesFromStorage) {
      setNotes(JSON.parse(notesFromStorage));
    }
    // merge demo notes with existing notes from localstorage
    setNotes([...notes, ...demoNotes.data.note]);
  }, []);

  return (
    <section>
      <input
        name="search"
        id="search"
        type="text"
        placeholder="search your notes..."
      />
      <button>Search</button>
      <div>
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <Link to={`/note/${note.id}`}>{note.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export { SearchResults };
