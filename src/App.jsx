import { Link, Routes, Route } from "react-router-dom";
// import Navigation from "features/navigation/navigation";
import { LandingPage } from "features/landing/LandingPage";
import CommandPalette from "features/search/CommandPalette";
import { useAppSelector } from "app/hooks";
import Note from "features/notes/Note";
import AddNoteForm from "features/notes/add-note-form";
import EditNoteForm from "features/notes/edit.note.form";
import About from "features/profile/About";
import HamburgerMenu from "features/navigation/HamburgerMenu";
import NotesList from "./features/notes/NotesList"

export default function App() {
  const notes = useAppSelector((state) => state.notes);

  return (
    <>
      <CommandPalette notes={notes} />
      <div className="">
        <div className="flex ">
          <div className="flex-auto">
            <Link to="/">
              <img
                className="inline-block"
                alt="Brainy logo"
                src="img/brainy_logo.svg"
              />
              <div className="inline-block text-6xl py-12 px-8 text-red-700 font-bold">
              Brainy Notes
                </div>
            </Link>
          </div>

          <HamburgerMenu />
        </div>
        <div>
        <NotesList/>
          {/* <Routes>
            
            <Route path="/" element={<LandingPage />} />
            <Route path="/notes/new" element={<AddNoteForm />} />
            <Route path="/note/:id" element={<Note />} />
            <Route path="/note/edit/:id" element={<EditNoteForm />} />
          </Routes> */}
        </div>
      </div>
    </>
  );
}
