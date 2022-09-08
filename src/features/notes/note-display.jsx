import * as React from "react";
import {  useParams  } from "react-router-dom";
import { supabase } from "client";
import { useContext, useState  } from "react";
import { UserContext } from "features/auth/utils";
import { useQuery } from "react-query";
import EditNoteForm from "./EditNoteForm";

const NoteDisplay = () => {
  const { id } = useParams();
  const fetchNote = async () => {
    const { data } = await supabase
      .from("notes")
      .select("*")
      .eq("id", id)
      .single();
    return data;
  };

  const user = useContext(UserContext);
  const { data, error, isLoading } = useQuery("note", fetchNote);
  const [editing, setEditing] = useState(false)

  if (error) {
    return <div>Ooopsie.... </div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data && editing) {
    return (
      <EditNoteForm note={data}/>
    )
  }
  if (data) {
    return <div>{editing ? <p>Now in edit mmode</p> : <p>Not edit</p>}<button onClick={() => setEditing(true)}>Edit</button><h2>{data.title}</h2></div>;
  }

  return null;
};
export { NoteDisplay };
