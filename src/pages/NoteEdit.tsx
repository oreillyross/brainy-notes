import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Note } from "../types/note";
import { base_url } from "../data/constants";

function NoteEdit() {
  const { noteId } = useParams();
  const [note, setNote] = useState<Note | null>(null);

  useEffect(() => {
    const getNote = async () => {
      const response = await fetch(`${base_url}/notes/${noteId}`);
      const noteData = await response.json();
      setNote(noteData);
    };
    getNote();
  }, [noteId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (note) {
      setNote({ ...note, title: e.currentTarget.value });
    }
  };

  const handleSubmit = async (formData: Note) => {
    const response = await fetch(`${base_url}/notes/${formData.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("failed to update note");
    }
  };
  const formattedDate = note?.updatedAt
    ? new Date(note.updatedAt).toDateString()
    : "";
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (note) {
            handleSubmit(note);
          }
        }}
      >
        <label htmlFor="title">Title</label>
        <input name="title" value={note?.title} onChange={handleChange} />
        <p>Last updated: {formattedDate}</p>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export { NoteEdit };
