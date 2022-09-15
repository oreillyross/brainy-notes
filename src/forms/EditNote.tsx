import { supabase } from "supabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditNoteForm({ note }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: note.title || "",
    description: note.description || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("notes")
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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
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
