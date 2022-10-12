import { supabase } from "api/supabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { definitions } from "types/supabase";

type NOTE = definitions["notes"]

interface Props {
  note: NOTE
}

export default function EditNoteForm({ note }: Props) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: note.title || "",
    description: note.description || "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from<NOTE>("notes")
      .update(form)
      .eq("id", note.id)
      .select();

    if (error) {
      console.error(error);
    }
    if (data) {
      console.log("updated record");
      navigate("/notes");
    }
  };

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form className="w-full mx-auto " onSubmit={handleSubmit}>
      <label className="text-xl" htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={form.title}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        type="text"
        value={form.description}
        onChange={handleChange}
      />
      <button type="submit">Update</button>
    </form>
  );
}
