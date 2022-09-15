import { Link, useNavigate } from "react-router-dom";
import { StrictMode, useEffect, useState } from "react";
import { supabase } from "api/supabase";
import AuthenticatedApp from "pages/AuthenticatedApp";
import UnauthenticatedApp from "pages/UnAuthenticatedApp";
import HamburgerMenu from "components/HamburgerMenu";

export default function App() {
  const navigate = useNavigate();

  return (
    <StrictMode>
        <Link to="/">
          <div className="flex">
            <img className="m-8" alt="Brainy logo" src="img/brainy_logo.svg" />
            <div className="m-auto justify-self-center text-6xl py-12 px-8 text-green-700 font-bold">
              Brainy Notes
            </div>
          </div>
        </Link>
    </StrictMode>
  );
}
