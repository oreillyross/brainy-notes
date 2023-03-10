import { supabase } from "api/supabase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditNoteForm({ note }: any) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: note.title || "",
    description: note.description || "",
  });

  const handleSubmit = async (e: any) => {
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

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form className="w-full mx-auto px-24" onSubmit={handleSubmit}>
      <label className="font-semibold mb-4 text-xl block" htmlFor="title">
        Title
      </label>
      <input
        className="w-full"
        id="title"
        name="title"
        type="text"
        value={form.title}
        onChange={handleChange}
      />
      <label className="font-semibold mb-4 text-xl block" htmlFor="description">
        Description
      </label>
      <textarea
        id="description"
        className="w-full"
        rows={10}
        name="description"
        value={form.description}
        onChange={handleChange}
      />
      <button type="submit">Update</button>
    </form>
  );
}
