import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "app/hooks";
import { selectNoteByID } from "features/notes/notesSlice";

const Note = () => {
  const params = useParams();

  const paramID: string = params.id as string;

  const navigate = useNavigate();

  const note = useAppSelector((state) => selectNoteByID(state.notes, paramID));

  console.log(note);

  if (note) {
    return (
      <section className="text-2xl">
        <h1>{note.title}</h1>
        <div className="w-full bg-orange-900">-</div>
        <p>{note.description}</p>
        <button
          onClick={() => {
            navigate(`/note/edit/${note.id}`);
          }}
          className="border border-green-700 ml-6 mt-3 p-2 rounded"
        >
          Edit Note
        </button>
      </section>
    );
  } else {
    return <h3>Note was not found</h3>;
  }
};

export default Note;
