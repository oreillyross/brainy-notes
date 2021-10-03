import * as React from "react";
import "./styles.css";

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

export default function App() {
  return (
    <div className="App">
      <h1>Brainy Notes</h1>
    </div>
  );
}
