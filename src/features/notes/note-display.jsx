import * as React from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { supabase } from "client";

const NoteDisplay = () => {
  const { id } = useParams();
  const [note, setNote] = React.useState({});

  React.useEffect(() => {
    const fetchNote = async () => {
      const { data } = await supabase
        .from("notes")
        .select("*")
        .eq("id", id)
        .single();
      setNote(data);
    };
    fetchNote();
  });

  return (
    <div>
      <h2 className="text-center p-2 text-gray-900 text-2xl">{note.title}</h2>
      <p>{note.description}</p>
    </div>
  );
};
export { NoteDisplay };
