import { supabase } from "client";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Logout = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const signOut = async () => {
      await supabase.auth.signOut();
      navigate("/");
    };

    signOut();
  }, []);

  return <div>Logging out...</div>;
};

export default Logout;
