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
        <Form className="p-4 border-red-400 border-2 m-2">
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
