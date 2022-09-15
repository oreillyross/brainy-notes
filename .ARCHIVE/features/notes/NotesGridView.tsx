import { TNote } from "types/note";

import NoteCard from "./NoteCard";

interface Props {
  notes: TNote[];
}

function NotesGridView(props: Props) {
  const notes = props.notes;

  return (
    <section className="border-t-2 mt-16 p-4 pl-16 text-1xl">
      <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3  ">
        {notes.map((note, index) => (
          <NoteCard note={note} />
        ))}
      </div>
    </section>
  );
}

export default NotesGridView;
