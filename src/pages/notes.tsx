import "./notes.scss";
import * as React from "react";
import { Link } from "react-router-dom";
import { AddNoteButton } from "components/add-note-button";
import { NoteBox } from "components/NoteBox";

type NoteProps = {
  id: string;
  title: string;
};

type NotesProps = {
  notes: NoteProps[];
};

const NoteLine = ({ id, title }: NoteProps) => {
  return (
    <li className="listnote__item">
      <Link to={`/notes/${id}`}>{title}</Link>
    </li>
  );
};

function Notes({ notes }: NotesProps) {
  const [searchText, setSearchText] = React.useState("");
  const [localNotes, setNotes] = React.useState<
    { title: string; id: string }[]
  >(notes);

  const listNotes = localNotes ? (
    localNotes.map(({ id, title }) => <NoteLine id={id} title={title} />)
  ) : (
    <div>No notes</div>
  );

  const onSearchChange = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value);
    const filteredNotes: { title: string, id: string }[] = localNotes.filter((note) =>
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
