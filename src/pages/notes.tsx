import "./notes.scss";
import * as React from "react";
import { Link } from "react-router-dom";
import { AddNoteButton } from "components/add-note-button";

type Props = {
  notes: [object];
};

function Notes({ notes }: Props) {
  const listNotes = notes ? (
    notes.map((note: any) => (
      <li className="listnote__item" key={note.id}>
        <Link to={`/notes/${note.id}`}>{note.title}</Link>
      </li>
    ))
  ) : (
    <div>Hello</div>
  );

  return (
    <section>
      <input
        name="search"
        id="search"
        type="text"
        placeholder="search your notes..."
      />
      <button>Search</button>
      <AddNoteButton />
      <div>
        <ul className="listnote">{listNotes}</ul>
      </div>
    </section>
  );
}

export { Notes };
