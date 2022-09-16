import { supabase } from "api/supabase";
import { useAuth } from "contexts/Auth";
import { Formik, Field, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { EMAILANDPWD } from "types";

function SignupForm() {
  const { signup } = useAuth();

  const initialValues: EMAILANDPWD = {
    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const formSubmit = async (values: EMAILANDPWD) => {
    const { email, password } = values;
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert(error.message);
    } else {
      navigate("/");
    }
  };
  return (
    <Formik initialValues={initialValues} onSubmit={formSubmit}>
      {(props) => (
        <>
          <Form className="p-4 max-w-2xl container mx-auto border-slate-400 border-2 m-2">
            <div className="text-2xl mb-8">Sign up</div>

            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <Field
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="email"
              type="email"
              placeholder="type your email here..."
            />

            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Password
            </label>
            <Field
              className="bg-gray-50 border mb-8 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="password"
              type="password"
              placeholder="type your password here..."
            />
            <button
              className="rounded text-2xl w-48 block p-4 text-slate-50 bg-green-600"
              type="submit"
            >
              Sign up
            </button>
          </Form>
          <div>
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </>
      )}
    </Formik>
  );
}

export { SignupForm };
