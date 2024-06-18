import { createRoot } from "react-dom/client";
import App from "./App";
import "styles/index.css";
import { DataProvider } from "data/DataProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import NoteForm from "forms/NoteForm";
// import { AuthProvider } from "contexts/Auth";
import { NotesView } from "./pages/NotesView";
import { NoteEdit } from "./pages/NoteEdit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/notes/add", element: <NoteForm /> },
      { path: "/notes", element: <NotesView /> },
      { path: "notes/:noteId", element: <NoteEdit /> },
    ],
  },
]);

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <DataProvider>
    <RouterProvider router={router} />
  </DataProvider>,
);
