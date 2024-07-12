import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Note } from "types/note";
import { base_url } from "../data/constants";

function NoteForm() {
  const [note, setNote] = useState<Note | null>(null);
  const navigate = useNavigate();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }) as Note);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(note, typeof note);
    const response = await fetch(base_url + "/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    if (!response.ok) {
      throw Error("Response not ok: " + response.statusText);
    }
    //TODO Add a toast notificaiton, possible delay before routing to notes page
    navigate("/notes");
  };

  return (
    <div>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <form className="border-2 p-2" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Create a note
          </h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title:
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              type="text"
              name="title"
              value={note?.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold text-sm mb-2">
              {" "}
              Description:
            </label>
            <textarea
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              name="description"
              value={note?.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Link to="/home">Go back home</Link>
    </div>
  );
}

export default NoteForm;
