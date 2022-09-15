import * as React from "react";
import { supabase } from "supabase";
import { useEffect } from "react";
import { PostgrestResponse } from "@supabase/supabase-js";
import { Link } from "react-router-dom";

type TNote = {
  id: number;
  title: string;
};




const NotesDisplay = () => {
  const [notes, setNotes] = React.useState<TNote[]>([]);
  const [note, setNote] = React.useState({
    title: "",
    description: "",
    url: "",
    id: ""
  });
  const { title, description, url, id } = note;

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const { data: notes } = await supabase.from("notes").select("*");
    //@ts-ignore
    setNotes(notes);
  }

  async function createNote() {
    // await supabase.from("notes").insert([{ title, description, url }]).single();
    // setNote({ title: "", description: "", url: "", id: "" });
    // fetchNotes();
  }

  return (
    <>
      <div className="container max-w-auto">
        <form className="border mx-12 m-auto">
          <input
            className="px-4"
            type="text"
            placeholder="enter a title"
            value={title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="enter description"
            value={description}
            onChange={(e) => setNote({ ...note, description: e.target.value })}
          />
          <input
            type="text"
            placeholder="enter url"
            value={url}
            onChange={(e) => setNote({ ...note, url: e.target.value })}
          />
          <button onClick={createNote}>Add Note</button>
        </form>
        <div className="m-24">
          <div className="w-full max-w-3xl mx-auto my-16 px-2">
            {/* {notes.map((note) => {
              return (
                <Link key={note.id} to={`/note/${note.id}`}>
                  <a className="p-8 h-40 rounded shadow text-xl flex">
                    {note.title}
                  </a>
                </Link>
              ); */}
            {/* })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export { NotesDisplay };
