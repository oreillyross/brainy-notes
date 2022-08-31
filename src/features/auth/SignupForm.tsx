import { supabase } from "client";
import { Formik, Field, Form } from "formik";

type FormValues = {
  email: string;
  password: string;
};

const initialValues: FormValues = {
  email: "",
  password: "",
};

const formSubmit = async (values: FormValues) => {
  console.log(values);
  const { email, password } = values;
  try {
    await supabase.auth.signUp({ email, password });
  } catch (error) {
    console.error(error);
  }
};

function SignupForm() {
  return (
    <Formik initialValues={initialValues} onSubmit={formSubmit}>
      {(props) => (
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
          <button className="rounded text-2xl w-48 block p-4 text-slate-50 bg-green-600" type="submit">Sign up</button>
        </Form>
      )}
    </Formik>
  );
}

export { SignupForm };
