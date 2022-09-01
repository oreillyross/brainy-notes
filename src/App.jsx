import { Link, useNavigate } from "react-router-dom";
import { LandingPage } from "features/landing/LandingPage";
import CommandPalette from "features/search/CommandPalette";
import { StrictMode, useState } from "react";
import { supabase } from "client";
import { UserContext } from "features/auth/utils";
import AuthenticatedApp from "AuthenticatedApp";
import UnauthenticatedApp from "UnAuthenticatedApp";

export default function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async (email, password) => {
    supabase.auth.signIn({ email, password }).then((user) => {
      setUser(user);
      navigate("/notes");
    });
  };

  return (
    <StrictMode>
      <UserContext.Provider value={user}>
        <div className="flex">
          <Link className="p-5 pt-10" to="/">
            <img className="" alt="Brainy logo" src="img/brainy_logo.svg" />
          </Link>
          <div className="text-6xl py-12 px-8 text-green-700 font-bold">
            Brainy Notes
          </div>
        </div>
        <div>
        </div>
        {user ? (
          <AuthenticatedApp />
        ) : (
          <UnauthenticatedApp login={handleLogin} />
        )}
      </UserContext.Provider>
      <div className="border-2 border-solid p-12 pt-0">
        DEBUG SECTION
        <div>{JSON.stringify(user)}</div>
      </div>
    </StrictMode>
  );
}
