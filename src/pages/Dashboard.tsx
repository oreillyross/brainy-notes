import { supabase } from "api/supabase";
import { useAuth } from "contexts/Auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user, signout } = useAuth();
  const navigate = useNavigate();
  async function handleSignOut() {
    await supabase.auth.signOut();
    navigate("/login")  
}

  return (
    <div>
      <h1>Welcome, {user?.id} </h1>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
}
