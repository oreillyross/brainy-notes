import React from "react";
import "./LoginForm.css";

function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "email") {
      setEmail(e.currentTarget.value);
    }
    if (e.currentTarget.name === "password") {
      setPassword(e.currentTarget.value);
    }
    if (e.currentTarget.name === "rememberMe") {
      setRememberMe(e.currentTarget.checked);
    }
  };

  const handleSubmit = (e) => {
    alert(`${email}, ${password}, ${rememberMe}`);
  };

  return (
    <form onSubmit={handleSubmit} className="loginform">
      <label htmlFor="email">Email</label>
      <input
        className="loginform__input"
        type="email"
        name="email"
        id="email"
        placeholder="type your email here..."
        value={email}
        onChange={handleChange}
      />
      <label htmlFor="email">Password</label>
      <input
        className="loginform__input"
        name="password"
        id="password"
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="type your password here..."
      />
      <label htmlFor="email">Remember me</label>
      <input
        type="checkbox"
        id="rememberMe"
        checked={rememberMe}
        onChange={handleChange}
        name="rememberMe"
        className="loginform__input"
      />
      <button type="submit" className="loginform__submit">
        Submit
      </button>
    </form>
  );
}

export { LoginForm };
