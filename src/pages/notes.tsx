import "./notes.scss";
import * as React from "react";
import { Link } from "react-router-dom";
import { AddNoteButton } from "components/add-note-button";
import { AddNoteBox } from "components/add-note-box";

type Props = {
  notes: [{ title: string }];
};

function Notes({ notes }: Props) {
  const [searchText, setSearchText] = React.useState("");
  const [localNotes, setNotes] = React.useState<{ title: string }[]>(notes);

  const listNotes = localNotes ? (
    notes.map((note: any) => (
      <li className="listnote__item" key={note.id}>
        <Link to={`/notes/${note.id}`}>{note.title}</Link>
      </li>
    ))
  ) : (
    <div>No notes</div>
  );

  const onSearchChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value);
    const filteredNotes: { title: string }[] = localNotes.filter((note) =>
      note.title.includes(searchText)
    );
    setNotes(filteredNotes);
  };

  return (
    <section>
      <div className="searchnotes">
        <input
          className="searchnotes__input"
          name="search"
          value={searchText}
          onChange={onSearchChange}
          id="search"
          type="text"
          placeholder="search your notes..."
        />
        <button className="searchnotes__button">Search</button>
      </div>
      <div>
        <ul className="listnote">{listNotes}</ul>
      </div>
      <div>
        <AddNoteButton />
      </div>
    </section>
  );
}

export { Notes };
