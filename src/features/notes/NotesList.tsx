import { useAppSelector } from "app/hooks";
import { DocumentAddIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotesList = () => {
  const notes = useAppSelector((state) => state.notes);
  const navigate = useNavigate();

  //TODO useEffect to update notes state, then dispatch a action
  useEffect(() => {});

  return (
    <main className="flow-root border p-4 m-6">
      <section className="float-right">
        <label className="block pb-2" htmlFor="view">
          Change view
        </label>
        <select className="ml-4 text-center" name="view" id="view">
          <option value="list">List</option>
          <option value="grid">Grid</option>
        </select>
      </section>

      <section className="border-t-2 mt-16 p-4 pl-16 text-1xl">
        <table className="text-1xl w-full table-auto">
          <thead className="text-2xl text-amber-900">
            <tr>
              <th>No.</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {notes.map((note, index) => (
              <tr className="hover:font-medium hover:bg-stone-100 border">
                <td className="p-2">{index + 1}</td>
                <td className="tracking-wider pl-10 ">
                  <Link to={`/note/${note.id}`}>{note.title}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default NotesList;
