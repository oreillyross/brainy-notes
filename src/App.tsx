import * as React from "react";
import "./styles.scss";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { EditNoteForm } from "pages/EditNoteForm";
import { AddNoteForm } from "pages/add-note-form";
import { NotesDisplay } from "pages/notes-display";
import { NoteDisplay } from "pages/note-display";
import { Navigation } from "components/navigation";
import { client } from "_apollo";
import { ApolloProvider } from "@apollo/client";

import { LandingPage } from "pages/landing";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app">
          <Link to="/">
            <img
              className="app__img"
              alt="Brainy logo"
              src="./brainy_logo.svg"
            />
          </Link>
          <div className="app__login">{/* <UserBar /> */}</div>
          <h1 className="text-4xl text-amber-900">Brainy Notes</h1>
          <Navigation />
        </div>
        <div className="body">
          <Routes>
            <Route path="/addnote" element={<AddNoteForm />} />

            <Route path="/edit" element={<EditNoteForm />} />

            <Route path="/notes/:id" element={<NoteDisplay />} />

            <Route path="/notes" element={<NotesDisplay />} />

            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}
