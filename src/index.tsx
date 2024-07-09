import { createRoot } from "react-dom/client";
import App from "./App";
import "styles/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DataProvider } from "data/DataProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import NoteForm from "forms/NoteForm";
// import { AuthProvider } from "contexts/Auth";
import { NotesView } from "./pages/NotesView";
import { NoteEdit } from "./pages/NoteEdit";
import { LandingPage } from "pages/Landing";
// import {ReactQueryDevtools} from "@tanstack/react-query-devtools"

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/notes/add", element: <NoteForm /> },
      { path: "/notes", element: <NotesView /> },
      { path: "/notes/:noteId", element: <NoteEdit /> },
      {path: "/home", element: <LandingPage/>}
    ],
  },
]);

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <QueryClientProvider client={queryClient}>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
    {/* <ReactQueryDevtools/> */}
  </QueryClientProvider>,
);
