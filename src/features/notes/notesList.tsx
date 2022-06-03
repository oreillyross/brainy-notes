import { useAppSelector } from "app/hooks";

const NotesList = () => {
  const notes = useAppSelector((state) => state.notes);
  return (
    <main>
      <h1 className="p-12">Notes</h1>
      {notes.map((note) => (
        <div className="border m-6 max-w-2xl p-2" key={note.id}>
          
            <a href={note.url}><h1 className="text-red-600">{note.title}</h1></a>
          
          <p>{note.description}</p>
        </div>
      ))}
    </main>
  );
};

export default NotesList;
