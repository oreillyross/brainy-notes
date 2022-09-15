import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { supabase } from "api/supabase";

interface Props {
  login: ( email: string, password: string ) => void;
}

function LoginForm() {
  const navigate = useNavigate();
  const initialValues = { email: "", password: "", rememberMe: false };
  type FormValues = {
    email: string;
    password: string;
    rememberMe: boolean;
  };

  const handleSubmit = (values: FormValues) => {
    const { email, password } = values;
    console.log(email, password);
    
  };

  const handleValidation = (values: FormValues) => {
    const errors: any = {};
    if (values.email === "") errors.email = "Email cannot be empty!";
    return errors;
  };

  return (
    <div className=" max-w-2xl container mx-auto mt-10 border-slate-300 rounded text-xl border-2 p-6">
      <h2 className="text-3xl  p-5">Login</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={handleValidation}
      >
        {(props) => (
          <>
            <Form className="px-12 py-10">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <Field
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="email"
                name="email"
                id="email"
                placeholder="type your email here..."
              />
              <ErrorMessage name="email">
                {() => <div>Email is a required field</div>}
              </ErrorMessage>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Password
              </label>
              <Field
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="password"
                id="password"
                type="password"
                placeholder="type your password here..."
              />
              <ErrorMessage name="password">
                {() => <div>Password field is required</div>}
              </ErrorMessage>
              <label htmlFor="email" className="p-3">
                Remember me
              </label>
              <Field
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                className="inline-block bg-red-200"
              />
              <button
                disabled={props.isSubmitting}
                type="submit"
                className="block bg-green-600 text-slate-50 p-3 rounded font-bold m-2 w-64"
              >
                Submit
              </button>
            </Form>
            <div>
              <div>
                No account? <Link to="/signup">Create one</Link>
              </div>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}

export { LoginForm };
