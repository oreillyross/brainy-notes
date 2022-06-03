import { Link, Routes, Route } from "react-router-dom";
import Navigation from "features/navigation/navigation";
import { LandingPage } from "features/landing/LandingPage";
import NotesList from "features/notes/notesList";
import CommandPalette from "features/search/CommandPalette";
import { notes } from "api/fakeNotes";

export default function App() {
  return (
    <>
      <CommandPalette notes={notes} />
      <div className="container relative px-5 flex">
        <Link to="/">
          <img className="p-6" alt="Brainy logo" src="img/brainy_logo.svg" />
        </Link>
        <div className="app__login">{/* <UserBar /> */}</div>

        <h1 className="m-auto text-6xl font-bold text-amber-900">
          Brainy Notes
        </h1>
      </div>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/notes" element={<NotesList />} />
        </Routes>
      </div>
    </>
  );
}
