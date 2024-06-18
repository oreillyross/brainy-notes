import React, { useState } from "react";
import { Link } from "react-router-dom";
import {base_url} from "../data/constants"

function NoteForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here

    const response = await fetch(base_url + "/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, description: description }),
    });
    if (!response.ok) {
      throw Error("Response not ok: " + response.statusText);
    }
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
      <Link to="/">Go back home</Link>
    </div>
  );
}

export default NoteForm;
