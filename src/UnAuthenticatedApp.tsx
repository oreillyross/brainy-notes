import { LandingPage } from "features/landing/LandingPage";
import { LoginForm } from "features/auth/LoginForm";
import { Routes, Route } from "react-router-dom";

interface Props {
  login: (email: string, password: string) => void;
}

export default function UnauthenticatedApp({ login }: Props) {
  return (
    <section>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm login={login} />} />
      </Routes>
    </section>
  );
}
