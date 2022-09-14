import { Routes, Route } from "react-router-dom";
import AddNoteForm from "features/notes/AddNoteForm";
import NotesList from "./features/notes/NotesList";
import { QueryClientProvider, QueryClient } from "react-query";
import User from "features/auth/User";
import Navigation from "features/navigation/navigation";
import { NoteDisplay } from "features/notes/NoteDisplay";

export default function AuthenticatedApp() {
  const queryClient = new QueryClient();

  return (
    <section>
      <div>
        <Navigation />
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/notes" element={<NotesList />} />
            <Route path="/notes/new" element={<AddNoteForm />} />
            <Route path="/notes/:id" element={<NoteDisplay />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </QueryClientProvider>
      </div>
    </section>
  );
}
