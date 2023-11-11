import { StrictMode } from "react";
//import UnauthenticatedApp from "pages/UnAuthenticatedApp";
//import { useAuth } from "contexts/Auth";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const mainElement = (
  <div className="bg-red-300 h-screen m-8">Main cool content</div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: mainElement,
  },
]);

export default function App() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
