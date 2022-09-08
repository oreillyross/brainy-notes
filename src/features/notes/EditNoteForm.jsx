import { supabase } from "client";
import { useState } from "react";

export default function EditNoteForm({ note }) {
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
