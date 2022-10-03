import { useParams, Link } from "react-router-dom";
import { supabase } from "api/supabase";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import EditNoteForm from "../forms/EditNote";
import { definitions } from "types/supabase";
import   { useNavigate} from "react-router-dom"

type NOTE = definitions["notes"]

const NoteDisplay = () => {
  const navigate = useNavigate()
  const { id } = useParams();

  const fetchNote = async () => {
    const { data } = await supabase
      .from<NOTE>("notes")
      .select("*")
      .eq("id", id)
      .single();
    return data;
  };

  const deleteNote = async () => {
    const {data} = await supabase.from<NOTE>("notes").delete().eq("id", id).single()
    return data
  }

  const { data, error, isLoading } = useQuery(["note"], fetchNote);
  const [editing, setEditing] = useState(false);

  if (error) {
    return <div>Ooopsie.... </div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data && editing) {
    return <EditNoteForm note={data} />;
  }
  if (data) {
    return (
      <div>
        {editing ? <p>Now in edit mode</p> : <p>Not edit</p>}
        <button onClick={() => setEditing(true)}>Edit</button>
        <button onClick={() => deleteNote().then(data => {
          alert(`The following note with title: ${data?.title} has been deleted`)
          navigate("/notes/all")
          
        })}>Delete</button>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div>Additional references:</div>
        <Link to={"/"}>name of website</Link>
      </div>
    );
  }

  return null;
};
export { NoteDisplay };
