import React from "react";
import "./LoginForm.css";
import { Formik, Form, ErrorMessage, Field } from "formik";

function LoginForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);

  const initialValues = { email: "", password: "", rememberMe: false };
  type FormValues = {
    email: string;
    password: string;
    rememberMe: boolean;
  };

  const handleSubmit = (values: FormValues) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(values);
        alert(JSON.stringify(values));
      }, 1000);
    });
  };

  const handleValidation = (values: FormValues) => {
    const errors: any = {};
    if (values.email === "") errors.email = "Email cannot be empty!";
    return errors;
  };

  return (
    <>
      <h2>Login</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={handleValidation}
      >
        {(props) => (
          <Form className="loginform">
            <label htmlFor="email">Email</label>
            <Field
              className="loginform__input"
              type="email"
              name="email"
              id="email"
              placeholder="type your email here..."
            />
            <ErrorMessage name="email">
              {() => <div>Email is a required field</div>}
            </ErrorMessage>
            <label htmlFor="email">Password</label>
            <Field
              className="loginform__input"
              name="password"
              id="password"
              type="password"
              placeholder="type your password here..."
            />
            <ErrorMessage name="password">
              {() => <div>Password field is required</div>}
            </ErrorMessage>
            <label htmlFor="email">Remember me</label>
            <Field
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              className="loginform__input"
            />
            <button
              disabled={props.isSubmitting}
              type="submit"
              className="loginform__submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export { LoginForm };
