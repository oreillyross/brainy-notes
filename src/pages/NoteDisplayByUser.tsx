import { useParams, Link } from "react-router-dom";
import { supabase } from "api/supabase";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import SearchBar from "components/SearchBar";
import DisplayNotes from "components/DisplayNotes";

const noteSchema = z.object({
  id: z.number(),
  created_at: z.string().optional(),
  title: z.string(),
  description: z.string().optional(),
  created_by: z.string().optional(),
});

type TNote = z.infer<typeof noteSchema>;

const NoteDisplayByUser = () => {
  const { userid } = useParams();

  const fetchNotes = async () => {
    const { data } = await supabase
      .from("notes")
      .select("*")
      .eq("created_by", userid);

    return data;
  };

  const { data, error, isLoading } = useQuery(["notes", "user"], fetchNotes);
  const [editing, setEditing] = useState(false);

  if (error) {
    return <div>Ooopsie.... </div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (data) {
    return (
      <div>
        <DisplayNotes />
      </div>
    );
  }

  return null;
};
export { NoteDisplayByUser };
