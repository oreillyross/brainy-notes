import { Routes, Route, Link } from "react-router-dom";
import AddNote from "forms/AddNote";
import Navigation from "components/NavigationBar";
import { NoteDisplay } from "pages/NoteDisplay";
import Dashboard from "./Dashboard";

export default function AuthenticatedApp() {
  const links = [
    { name: "View all notes", link: "" },
    { name: "View my notes", link: "/notes/new" },
    { name: "Add a note", link: "/notes/new" },
  ];
  return (
    <section>
      <div>
        <div className="flex">
          <Link to="/">
            <img className="m-8" alt="Brainy logo" src="img/brainy_logo.svg" />
          </Link>
          <div className="m-auto justify-self-center text-6xl py-12 px-8 text-green-700 font-bold">
            Brainy Notes
          </div>
        </div>

        <Navigation items={links} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/notes/new" element={<AddNote />} />
          <Route path="/notes/:id" element={<NoteDisplay />} />
        </Routes>
      </div>
    </section>
  );
}
