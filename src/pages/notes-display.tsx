import * as React from "react";
import { NetworkStatus, useQuery } from "@apollo/client";
import * as queries from "../queries/index";
import { Notes } from "pages/notes";
import { Loading } from "components/loading-indicator";
import SearchBar from "../components/SearchBar";
import { BounceLoader } from "components/bounce-loader";
import { supabase } from "../client";
import { useEffect } from "react";
import { PostgrestResponse } from "@supabase/supabase-js";

type TNote = {
  title: string;
}

const NotesDisplay = () => {
  const [notes, setNotes] = React.useState<TNote[]>([]);
  const [note, setNote] = React.useState({
    title: "",
    description: "",
    url: "",
  });
  const { title, description, url } = note;

  useEffect(() => {
    fetchNotes();
  }, []);

  type JSONResp = {
    data?: any[]
  }

  async function fetchNotes() {
    const {data} = await supabase.from("notes").select();
    
    console.log(data);
    //@ts-ignore
    setNotes(data)
    
  }

  async function createNote() {
    await supabase.from("notes").insert([{ title, description, url }]).single();
    setNote({ title: "", description: "", url: "" });
    fetchNotes();
  }

  return (
    <>
      <div className="container max-w-auto">
        <input
          type="text"
          placeholder="enter a title"
          value={title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="enter description"
          value={title}
          onChange={(e) => setNote({ ...note, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="enter url"
          value={title}
          onChange={(e) => setNote({ ...note, url: e.target.value })}
        />
        <button>Add Note</button>
        <div className="m-24">
           Some data
           {notes.map((note) => {
             <li>{note.title}</li>
           })}
        </div>
      </div>
    </>
  );
};

export { NotesDisplay };
