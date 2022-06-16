import { Link, Routes, Route } from "react-router-dom";
// import Navigation from "features/navigation/navigation";
import { LandingPage } from "features/landing/LandingPage";
import NotesList from "features/notes/notesList";
import CommandPalette from "features/search/CommandPalette";
import { useAppSelector } from "app/hooks";
import Note from "features/notes/Note";
import AddNoteForm from "features/notes/add-note-form";
import EditNoteForm from "features/notes/edit.note.form";

export default function App() {
  const notes = useAppSelector((state) => state.notes);

  return (
    <>
      <CommandPalette notes={notes} />
      <div className="">
        <div className="">
          <Link to="/">
            <img className="h-20" alt="Brainy logo" src="img/brainy_logo.jpg" />
          </Link>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/notes" element={<NotesList />} />
            <Route path="/notes/new" element={<AddNoteForm />} />
            <Route path="/note/:id" element={<Note />} />
            <Route path="/note/edit/:id" element={<EditNoteForm />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
