import { Routes, Route, Link } from "react-router-dom";
import AddNote from "forms/AddNote";
import Navigation from "components/NavigationBar";
import { NoteDisplay } from "pages/NoteDisplay";
import Dashboard from "./Dashboard";
import Header from "components/Header";
import { useAuth } from "contexts/Auth";
import { NoteDisplayByUser } from "./NoteDisplayByUser";
import UserPage from "./UserPage";

export default function AuthenticatedApp() {
  const {user} = useAuth()
  return (
    <section className="bg-blue-200/20 min-h-screen">
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/notes" element={<Dashboard />} />
          <Route path="/notes/user/:userid" element={<NoteDisplayByUser />} />
          <Route path="/notes/new" element={<AddNote />} />
          <Route path="/note/:id" element={<NoteDisplay />} />
        </Routes>
      </div>
    </section>
  );
}
