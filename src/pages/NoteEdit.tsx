import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Note } from "../types/note";
import { base_url } from "../data/constants";

function NoteEdit() {
  const { noteId } = useParams();
  const [note, setNote] = useState<Note | null>(null);
  const navigate = useNavigate();

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
      setNote({ ...note, [e.target.name]: e.currentTarget.value });
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
    navigate("/notes");
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
        <div className="bg-red-200">
          <input
            autoFocus
            className="w-full"
            name="title"
            value={note?.title}
            onChange={handleChange}
          />
          <textarea name="description" value={note?.description} />
          <p>Last updated: {formattedDate}</p>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

export { NoteEdit };
