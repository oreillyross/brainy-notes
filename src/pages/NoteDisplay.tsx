import { useParams, Link } from "react-router-dom";
import { supabase } from "api/supabase";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import EditNoteForm from "../forms/EditNote";
import { definitions } from "types/supabase";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type NOTE = definitions["notes"];

const NoteDisplay = () => {
  const navigate = useNavigate();
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
    const { data } = await supabase
      .from<NOTE>("notes")
      .delete()
      .eq("id", id)
      .single();
    return data;
  };

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
        <div className="mx-auto max-w-xl">
          <h2 className="text-4xl text-slate-800">{data.title}</h2>

<div className="text-right space-x-5 mt-4">
          <button className="border p-2 w-24 bg-green-800/10 rounded-lg font-bold" onClick={() => setEditing(true)}>Edit</button>
          <button
          className="border p-2 w-24 bg-green-800/10 rounded-lg font-bold"
            onClick={() =>
              deleteNote().then((data) => {
                alert(
                  `The following note with title: ${data?.title} has been deleted`
                );
                navigate("/notes/all");
              })
            }
          >
            Delete
          </button>
</div>
          <div className="bg-slate-100 border h-96 rounded-b-2xl border-b-8 mt-4 -m-48 p-4">
            <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose">
              {data.description ? data.description : ""}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
export { NoteDisplay };
