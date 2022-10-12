import { Routes, Route, Link } from "react-router-dom";
import AddNote from "forms/AddNote";
import Navigation from "components/NavigationBar";
import { NoteDisplay } from "pages/NoteDisplay";
import Dashboard from "./Dashboard";
import Header from "components/Header";
import { useAuth } from "contexts/Auth";
import { NoteDisplayByUser } from "./NoteDisplayByUser";

export default function AuthenticatedApp() {
  const {user} = useAuth()
  const links = [
    { name: "View all notes", link: "/" },
    { name: "View my notes", link: `/notes/user/${user?.id}` },
    { name: "Add a note", link: "/notes/new" },
  ];
  return (
    <section>
      <div>
        <Header />
        <Navigation items={links} />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/notes/:view" element={<Dashboard />} />
          <Route path="/notes/user/:userid" element={<NoteDisplayByUser />} />
          <Route path="/notes/new" element={<AddNote />} />
          <Route path="/note/:id" element={<NoteDisplay />} />
        </Routes>
      </div>
    </section>
  );
}
