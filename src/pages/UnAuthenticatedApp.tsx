import { LandingPage } from "pages/Landing";
import { LoginForm } from "forms/Login";
import { Routes, Route } from "react-router-dom";
import { SignupForm } from "forms/Signup";
import Header from "components/Header"

export default function UnauthenticatedApp() {
  return (
    <section>
      <Header/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
      </Routes>
    </section>
  );
}
