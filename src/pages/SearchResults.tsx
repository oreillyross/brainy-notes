import "./SearchResults.scss";
import * as React from "react";
import { Link } from "react-router-dom";

type NoteType = {
  title: string;
  description: string;
  url: string;
};

function SearchResults() {
  const [notes, setNotes] = React.useState<NoteType[]>([]);

  React.useEffect(() => {
    const notesFromStorage = localStorage.getItem("notes");
    console.log(notesFromStorage);
    if (notesFromStorage) {
      console.log(notesFromStorage);
      setNotes(JSON.parse(notesFromStorage));
    }
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
            <li>
              <Link to="/note/:id">{note.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export { SearchResults };
