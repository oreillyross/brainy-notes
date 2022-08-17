import { Link, Routes, Route } from "react-router-dom";
import { LandingPage } from "features/landing/LandingPage";
import CommandPalette from "features/search/CommandPalette";
import { useAppSelector } from "app/hooks";
import Note from "features/notes/Note";
import AddNoteForm from "features/notes/AddNoteForm";
import EditNoteForm from "features/notes/edit.note.form";
import About from "features/profile/About";
import HamburgerMenu from "features/navigation/HamburgerMenu";
import NotesList from "./features/notes/NotesList";
import { QueryClientProvider, QueryClient } from "react-query";
import { AddNoteButton } from "features/notes/add-note-button";
import { StrictMode } from "react";
import { LoginForm } from "features/auth/LoginForm";
import { SignupForm } from "features/auth/SignupForm";

export default function App() {
  const notes = useAppSelector((state) => state.notes);
  const queryClient = new QueryClient();

  return (
    <StrictMode>
      <CommandPalette notes={notes} />
      <div className="flex justify-around">
        <Link to="/">
          <img className="" alt="Brainy logo" src="img/brainy_logo.svg" />
        </Link>
        <div className="text-6xl py-12 px-8 text-green-700 font-bold">
          Brainy Notes
        </div>

        <AddNoteButton />

        <HamburgerMenu />
      </div>
      <div>Easily create notes</div>
      <div>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/notes" element={<NotesList />} />
            <Route path="/notes/:id" element={<Note />} />
            <Route path="/notes/new" element={<AddNoteForm />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginForm />} />{" "}
            <Route path="/signup" element={<SignupForm />} />{" "}
          </Routes>
          {/* <Routes>
            
            <Route path="/note/:id" element={<Note />} />
            <Route path="/note/edit/:id" element={<EditNoteForm />} />
          </Routes> */}
        </QueryClientProvider>
      </div>
    </StrictMode>
  );
}
