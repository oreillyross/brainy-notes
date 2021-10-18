import * as React from "react";
import "./styles.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { EditNoteForm } from "pages/EditNoteForm";
import { PrivateRoute } from "routes/PrivateRoute";
import { AddNoteForm } from "pages/AddNoteForm";
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
          <h1 className="app__title">Brainy Notes</h1>
          <Navigation />
        </div>
        <div className="body">
          <Switch>
            <Route path="/addnote">
              <AddNoteForm />
            </Route>
            <Route path="/edit">
              <EditNoteForm />
            </Route>
            <Route path="/notes/:id">
              <NoteDisplay />
            </Route>
            <Route path="/notes">
              <NotesDisplay />
            </Route>
            <Route exact path="/">
              <LandingPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}
