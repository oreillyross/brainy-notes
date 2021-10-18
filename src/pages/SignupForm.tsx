import React from "react";
import { Formik, Field, Form } from "formik";
import "./SignupForm.scss";
import { signup } from "../firebase/auth";

type FormValues = {
  email: string;
  password: string;
};

const initialValues: FormValues = {
  email: "",
  password: ""
};

const formSubmit = async (values: FormValues) => {
  console.log(values);
  try {
    await signup(values);
  } catch (error) {
    console.error(error);
  }
};

function SignupForm() {
  return (
    <Formik initialValues={initialValues} onSubmit={formSubmit}>
      {(props) => (
        <Form className="loginform">
          <Field
            className="loginform__input"
            name="email"
            type="email"
            placeholder="type your email here..."
          />
          <Field
            className="loginform__input"
            name="password"
            type="password"
            placeholder="type your password here..."
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export { SignupForm };
