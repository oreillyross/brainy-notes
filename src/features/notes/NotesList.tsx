import { supabase } from "client";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import type { TNote } from "types/note";

const fetchNotes = async function () {
  const response = await supabase.from("notes").select("*");
  return response.data;
};

const DeleteButton = () => (
  <div className="bg-slate-200 w-12 text-center">
    <button>-</button>
  </div>
);

type TProps = {
  handleClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const NoteControlPanel = ({ handleClick }: TProps) => {
  return (
    <div className="flex justify-around space-x-4">
      <div>
        <svg
          className="h-10 w-10 text-blue-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </div>
      {/* Delete icon */}
      <div onClick={handleClick} className="hover:cursor-pointer bg-green-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
};

const NoteLine = ({ note }: { note: TNote }) => {
  const deleteNote = () => {
    alert("roo");
  };
  return (
    <li className="grid grid-cols-2 text-xl border p-4 m-2" key={note.id}>
      <Link to={`/notes/${note.id}`}>{note.title}</Link>
      <NoteControlPanel handleClick={deleteNote} />
    </li>
  );
};

const NotesList = () => {
  const { data: notes } = useQuery("notes", fetchNotes);
  return (
    <ul className="p-4 border m-4">
      {notes?.map((note) => (
        <NoteLine note={note} />
      ))}
    </ul>
  );
};

export default NotesList;
