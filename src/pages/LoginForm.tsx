import React from "react";
import "./LoginForm.css";

function LoginForm() {
  return (
    <form className="loginform">
      <input
        className="loginform__input"
        type="email"
        placeholder="type your email here..."
      />
      <input
        className="loginform__input"
        type="email"
        placeholder="type your email here..."
      />
    </form>
  );
}

export { LoginForm };
