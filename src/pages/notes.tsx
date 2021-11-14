import "./notes.scss";
import * as React from "react";
import { Link } from "react-router-dom";
import { AddNoteButton } from "components/add-note-button";
import { AddNoteBox } from "components/add-note-box";

type NoteProps = {
  id: string;
  title: string;
};

type NotesProps = {
  notes: NoteProps[];
};

const NoteLine = ({ id, title }: NoteProps) => {
  return (
    <li className="listnote__item" key={id}>
      <Link to={`/notes/${id}`}>{title}</Link>
    </li>
  );
};

function Notes({ notes }: NotesProps) {
  const [searchText, setSearchText] = React.useState("");
  const [localNotes, setNotes] = React.useState<{ title: string }[]>(notes);

  const listNotes = localNotes ? (
    notes.map((note: NoteProps) => <NoteLine id={note.id} title={note.title} />)
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
        <ul className="listnote">
          <li>
            <AddNoteBox />
          </li>
          {listNotes}
        </ul>
      </div>
      <div>
        <AddNoteButton />
      </div>
    </section>
  );
}

export { Notes };
