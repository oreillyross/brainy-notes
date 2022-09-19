import { Routes, Link, Route, useNavigate } from "react-router-dom";
import { StrictMode, useEffect, useState } from "react";
import { supabase } from "api/supabase";
import Dashboard from "pages/Dashboard";
import { LoginForm } from "forms/Login";
import { SignupForm } from "forms/Signup";
import { PrivateRoute } from "routes/PrivateRoute";
import Modal from "components/Modal";

export default function App() {
  const navigate = useNavigate();

  return (
    <StrictMode>
      <div className="flex">
        <Link to="/">
          <img className="m-8" alt="Brainy logo" src="img/brainy_logo.svg" />
        </Link>
        <div className="m-auto justify-self-center text-6xl py-12 px-8 text-green-700 font-bold">
          Brainy Notes
        </div>
      </div>

      <Routes>
        <Route path="/" element={<PrivateRoute component={Dashboard} />} />
        <Route
          path="/login"
          element={
            <Modal>
              <LoginForm />
            </Modal>
          }
        />
        <Route
          path="/signup"
          element={
            <Modal>
              <SignupForm />
            </Modal>
          }
        />
      </Routes>
    </StrictMode>
  );
}
