import { StrictMode } from "react";
import { useAuth } from "contexts/Auth";
import UnauthenticatedApp from "pages/UnAuthenticatedApp";
import { createBrowserRouter, RouterProvider  } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello mate!</div>
  }
])

export default function App() {
  return (
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  );
}
