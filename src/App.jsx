import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <section className="container max-w-6xl mx-auto px-6  py-6">
      <nav className="flex items-center justify-between font-bold text-white"></nav>
      <Link to="/notes/add">Add a note</Link>
      <Link to="/notes">View all Notes</Link>
      <div>
        <Outlet />
      </div>
    </section>
  );
}

export default App;
