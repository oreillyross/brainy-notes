import { Link, useNavigate } from "react-router-dom";
import { StrictMode, useEffect, useState } from "react";
import { supabase } from "client";
import { UserContext } from "features/auth/utils";
import AuthenticatedApp from "AuthenticatedApp";
import UnauthenticatedApp from "UnAuthenticatedApp";
import HamburgerMenu from "features/navigation/HamburgerMenu";

type TUser = {
  id: string;
};

export default function App() {
  // TESTING hardcode a user
  const testUser = {
    id: "cac5304c-0695-446d-b24a-761e0a6c0b2f",
  };
  const [user, setUser] = useState<TUser | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (email: any, password: any) => {
    supabase.auth.signIn({ email, password }).then(({ user }) => {
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
        <Link to="/">
          <div className="flex">
            <img className="m-8" alt="Brainy logo" src="img/brainy_logo.svg" />
            <div className="m-auto justify-self-center text-6xl py-12 px-8 text-green-700 font-bold">
              Brainy Notes
            </div>
          </div>
        </Link>
        {user ? (
          <AuthenticatedApp />
        ) : (
          <UnauthenticatedApp login={handleLogin} />
        )}
      </UserContext.Provider>
    </StrictMode>
  );
}
