import { supabase } from "client";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
const fetchNotes = async function () {
  const response = await supabase.from("notes").select("*");
  return response.data;
};

const NotesList = () => {
  const { data: notes } = useQuery("notes", fetchNotes);
  return (
    <ul className="p-4 border m-4">
      {notes?.map((note) => (
        <li className="text-xl border p-4 m-2" key={note.id}>
          <Link to={`/notes/${note.id}`}>{note.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NotesList;
