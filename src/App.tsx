import * as React from "react";
import "./styles.scss";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { LoginForm } from "pages/LoginForm";
import { SignupForm } from "pages/SignupForm";
// import { LandingPage } from "pages/LandingPage";
import { EditNoteForm } from "pages/EditNoteForm";
// import { UserBar } from "components/UserBar";
import { SearchResults } from "pages/SearchResults";
import { PrivateRoute } from "routes/PrivateRoute";
import { AddNoteForm } from "pages/AddNoteForm";
import { NoteDisplay } from "pages/NoteDisplay";
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
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/signup">
              <SignupForm />
            </Route>
            <Route path="/note/:id">
              <NoteDisplay />
            </Route>
            <Route path="/addnote">
              <AddNoteForm />
            </Route>
            <PrivateRoute path="/dashboard">
              <AddNoteForm />
            </PrivateRoute>
            <Route path="/edit">
              <EditNoteForm />
            </Route>
            <Route path="/search">
              <SearchResults />
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
