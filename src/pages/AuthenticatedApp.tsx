import { Routes, Route } from "react-router-dom";
import AddNote from "forms/AddNote";
import { QueryClientProvider, QueryClient } from "react-query";
import Navigation from "components/NavigationBar";
import { NoteDisplay } from "pages/NoteDisplay";

export default function AuthenticatedApp() {
  const queryClient = new QueryClient();

  return (
    <section>
      <div>
        <Navigation />
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/notes/new" element={<AddNote />} />
            <Route path="/notes/:id" element={<NoteDisplay />} />
          </Routes>
        </QueryClientProvider>
      </div>
    </section>
  );
}
