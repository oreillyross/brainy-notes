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
// move to its own file later
function Dashboard() {
  return <div>This is the logged in screen</div>;
}

// move to its own file
function Navigation() {
  return (
    <div>
      <Link to="/search">Search | </Link> <Link to="/">Home</Link> |{" "}
      <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link>{" "}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="app">
        <Link to="/">
          <img className="app__img" alt="Brainy logo" src="./brainy_logo.svg" />
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
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/edit">
            <EditNoteForm />
          </Route>
          <Route path="/search">
            <SearchResults />
          </Route>
          <Route exact path="/">
            {/* <LandingPage /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
