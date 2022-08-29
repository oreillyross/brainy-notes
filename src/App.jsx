import { Link, Routes, Route } from "react-router-dom";
import { LandingPage } from "features/landing/LandingPage";
import CommandPalette from "features/search/CommandPalette";
import { useAppSelector } from "app/hooks";
import Note from "features/notes/Note";
import AddNoteForm from "features/notes/AddNoteForm";
import HamburgerMenu from "features/navigation/HamburgerMenu";
import NotesList from "./features/notes/NotesList";
import { QueryClientProvider, QueryClient } from "react-query";
import { AddNoteButton } from "features/notes/add-note-button";
import { StrictMode, useEffect, useState } from "react";
import { LoginForm } from "features/auth/LoginForm";
import { SignupForm } from "features/auth/SignupForm";
import { supabase } from "client";
import { createContext } from "react";
import User from "features/auth/User";

export const UserContext = createContext(null);

export default function App() {
  const notes = useAppSelector((state) => state.notes);
  const queryClient = new QueryClient();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(supabase.auth.user());
  }, [user]);

  return (
    <StrictMode>
      <UserContext.Provider value={user}>
        <CommandPalette notes={notes} />
        <div className="flex justify-around">
          <Link to="/">
            <img className="" alt="Brainy logo" src="img/brainy_logo.svg" />
          </Link>
          <div className="text-6xl py-12 px-8 text-green-700 font-bold">
            Brainy Notes
          </div>

          {user ? <AddNoteButton /> : null}
          <HamburgerMenu />
        </div>
        <div>
          {user ? (
            <p>Logged in user is: {user.id} </p>
          ) : (
            <p>no user logged in</p>
          )}
        </div>

        <div>
          <QueryClientProvider client={queryClient}>
            <Routes>
              <Route path="/notes" element={<NotesList />} />
              <Route path="/notes/:id" element={<Note />} />
              <Route path="/notes/new" element={<AddNoteForm />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<LoginForm />} />{" "}
              <Route path="/signup" element={<SignupForm />} />{" "}
              <Route path="/user" element={<User />} />
            </Routes>
          </QueryClientProvider>
        </div>
      </UserContext.Provider>
    </StrictMode>
  );
}
