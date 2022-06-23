import { useAppSelector } from "app/hooks";
import { DocumentAddIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NotesListView from "./NotesListView";
import NotesGridView from "./NotesGridView";

const NotesList = () => {
  const notes = useAppSelector((state) => state.notes);
  const navigate = useNavigate();
  const [view, setView] = useState("list");

  //TODO useEffect to update notes state, then dispatch a action
  useEffect(() => {});

  const changeView = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setView(e.currentTarget.value);
  };

  return (
    <main className="flow-root border p-4 m-6">
      <section className="float-right">
        <label className="block pb-2" htmlFor="view">
          Change view
        </label>
        <select
          onChange={changeView}
          className="ml-4 text-center"
          name="view"
          id="view"
        >
          <option value="list">List</option>
          <option value="grid">Grid</option>
        </select>
      </section>

      {view === "list" && <NotesListView notes={notes} />}
      {view === "grid" && <NotesGridView notes={notes} />}
    </main>
  );
};

export default NotesList;
