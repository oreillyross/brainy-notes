import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";



function App() {
  const navigate = useNavigate()

useEffect(() => {
  navigate("/home")
}, [])
  
  return (
    <div>
      <Link to="/notes/add">Add a note</Link>
      <Link to="/notes">View all Notes</Link>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
