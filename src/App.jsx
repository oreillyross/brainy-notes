import { Link, useNavigate } from "react-router-dom";
import { LandingPage } from "features/landing/LandingPage";
import CommandPalette from "features/search/CommandPalette";
import { StrictMode, useEffect, useState } from "react";
import { supabase } from "client";
import { UserContext } from "features/auth/utils";
import AuthenticatedApp from "AuthenticatedApp";
import UnauthenticatedApp from "UnAuthenticatedApp";
import HamburgerMenu from "features/navigation/HamburgerMenu";

export default function App() {
  // TESTING hardcode a user
  const testUser = {
    id: "cac5304c-0695-446d-b24a-761e0a6c0b2f",
  };
  const [user, setUser] = useState(testUser);
  // const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async (email, password) => {
    supabase.auth.signIn({ email, password }).then((user) => {
      setUser(user);
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/notes");
    }
  }, []);
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
          <HamburgerMenu />
        </div>
        <div></div>
        {user ? (
          <AuthenticatedApp />
        ) : (
          <UnauthenticatedApp login={handleLogin} />
        )}
      </UserContext.Provider>
    </StrictMode>
  );
}
