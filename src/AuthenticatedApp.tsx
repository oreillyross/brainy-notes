import { Routes, Route } from "react-router-dom";
import Note from "features/notes/Note";
import AddNoteForm from "features/notes/AddNoteForm";
import NotesList from "./features/notes/NotesList";
import { QueryClientProvider, QueryClient } from "react-query";
import User from "features/auth/User";

export default function AuthenticatedApp() {
  const queryClient = new QueryClient();
  
  return (
    <section>
      <div>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/notes" element={<NotesList />} />
            <Route path="/notes/new" element={<AddNoteForm />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </QueryClientProvider>
      </div>
    </section>
  );
}
