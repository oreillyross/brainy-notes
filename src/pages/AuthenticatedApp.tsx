import { Routes, Route, Link } from "react-router-dom";
import AddNote from "forms/AddNote";
import Navigation from "components/NavigationBar";
import { NoteDisplay } from "pages/NoteDisplay";
import Dashboard from "./Dashboard";
import Header from "components/Header";

export default function AuthenticatedApp() {
  const links = [
    { name: "View all notes", link: "" },
    { name: "View my notes", link: "/notes/new" },
    { name: "Add a note", link: "/notes/new" },
  ];
  return (
    <section>
      <div>
        <Header />
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
