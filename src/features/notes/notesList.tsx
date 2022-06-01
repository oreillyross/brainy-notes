import { useAppSelector } from "app/hooks";

const NotesList = () => {
  const notes = useAppSelector((state) => state.notes);
  return (
    <main>
      <h1 className="mx-auto p-12">Notes</h1>
      {notes.map((note) => (
        <div>{note.title}</div>
      ))}
    </main>
  );
};

export default NotesList;
