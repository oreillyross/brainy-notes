import { Routes, Link, Route, useNavigate } from "react-router-dom";
import { StrictMode, useEffect, useState } from "react";
import Dashboard from "pages/Dashboard";
import { LoginForm } from "forms/Login";
import { SignupForm } from "forms/Signup";
import { PrivateRoute } from "routes/PrivateRoute";
import Modal from "components/Modal";
import Splash from "components/Splash";
import NoMatch from "pages/NoMatch";
import { useAuth } from "contexts/Auth";
import AuthenticatedApp from "pages/AuthenticatedApp";
import UnauthenticatedApp from "pages/UnAuthenticatedApp";

export default function App() {
  const navigate = useNavigate();
  const {user} = useAuth()
  return (
    <StrictMode>
        {user ? <AuthenticatedApp/> : <UnauthenticatedApp/>}
    </StrictMode>
  );
}
