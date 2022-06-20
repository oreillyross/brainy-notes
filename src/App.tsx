import { Link, Routes, Route } from "react-router-dom";
import Navigation from "features/navigation/navigation";
import { LandingPage } from "features/landing/LandingPage";
import NotesList from "features/notes/NotesList";
import CommandPalette from "features/search/CommandPalette";
import { useAppSelector } from "app/hooks";
import Note from "features/notes/Note";
import AddNoteForm from "features/notes/add-note-form";
import EditNoteForm from "features/notes/edit.note.form";
import About from "features/profile/About"

export default function App() {
  
  const notes = useAppSelector(state => state.notes)

  return (
    <>
      <CommandPalette notes={notes} />
      <div className="container relative px-5 flex">
        <Link to="/">
          <img className="p-6" alt="Brainy logo" src="/img/brainy_logo.svg" />
        </Link>
        <div className="app__login">{/* <UserBar /> */}</div>

        <h1 className="m-auto text-6xl font-bold text-amber-900">
          Brainy Notes
        </h1>
      </div>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/notes" element={<NotesList />} />
          <Route path="/notes/new" element={<AddNoteForm />} />
          <Route path="/note/:id" element={<Note/>}/>
          <Route path="/note/edit/:id" element={<EditNoteForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
