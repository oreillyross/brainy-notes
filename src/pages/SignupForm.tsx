import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import "./SignupForm.scss";

function SignupForm() {
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

export { SignupForm };
