import * as React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// move to its own file later
function Login() {
  return (
    <div>
      This is the login screen asking the user to Login and if they are not a
      existing user to create an account link
    </div>
  );
}
// move to its own file later
function Dashboard() {
  return <div>This is the logged in screen</div>;
}

// Move to its own file
function Home() {
  return <div> This is the home screen</div>;
}

// move to its own file
function Navigation() {
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}
      <Link to="/signup">Signup</Link> | <Link to="/dashboard">Dashboard</Link>{" "}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <img alt="Brainy logo" src="./brainy_logo.svg" />
        <h1>Brainy Notes</h1>
        <Navigation />
      </div>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <div>Signup component </div>
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
