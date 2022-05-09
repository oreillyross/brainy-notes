import "./styles.css";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { EditNoteForm } from "pages/EditNoteForm";
import { AddNoteForm } from "forms/add-note-form";
import { NotesDisplay } from "pages/notes-display";
import { NoteDisplay } from "pages/note-display";
import { Navigation } from "components/navigation";
import { client } from "_apollo";
import { ApolloProvider } from "@apollo/client";
import { Set } from "_apollo/Set";

import { LandingPage } from "pages/landing";
import NoteCard from "components/note-card/NoteCard";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container relative px-5">
          <Link to="/">
            <img className="p-6" alt="Brainy logo" src="/brainy_logo.svg" />
          </Link>
          <div className="app__login">{/* <UserBar /> */}</div>

          <h1 className="text-center text-4xl text-amber-900">Brainy Notes</h1>
          <Navigation />
        </div>
        <div className="">
          <Routes>
            <Route path="/addnote" element={<AddNoteForm />} />

            <Route path="/edit" element={<EditNoteForm />} />

            <Route path="/notes/:id" element={<NoteDisplay />} />

            <Route path="/notes" element={<NotesDisplay />} />

            <Route path="/notecards" element={<NotesDisplay />} />

            <Route path="/" element={<LandingPage />} />

            <Route path="/set" element={<Set />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}
