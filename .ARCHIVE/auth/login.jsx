import { useEffect } from "react";
import { supabase } from "../client";

const Login = () => {
  useEffect(() => {
    supabase.auth.signIn({
      provider: "github",
    });
  }, []);
  return <div>Logging in....</div>;
};

export default Login;
