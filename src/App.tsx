import "./styles.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
export default function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="container relative px-5 flex">
          <Link to="/">
            <img className="p-6" alt="Brainy logo" src="/brainy_logo.svg" />
          </Link>
          <div className="app__login">{/* <UserBar /> */}</div>

          <h1 className="m-auto text-6xl font-bold text-amber-900">
            Brainy Notes
          </h1>
        </div>
        <Navigation />
        <div className="">
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/logout" element={<Logout />} />

            <Route path="/addnote" element={<AddNoteForm />} />

            <Route path="/edit" element={<EditNoteForm />} />

            <Route path="/note/:id" element={<NoteDisplay />} />

            <Route path="/notes" element={<NotesDisplay />} />

            <Route path="/notecards" element={<NotesDisplay />} />

            <Route path="/about" element={<Counter />} />

            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}
