import { Formik, Field, Form } from "formik";
import { useMutation } from "@apollo/client";
import * as queries from "queries/index";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";

const initialValues: FormValues = {
  title: "",
  description: "",
  url: ""
};

type FormValues = {
  title: string;
  description?: string;
  url?: string;
};

function AddNoteForm() {
  const navigate = useNavigate();

  const [addNote] = useMutation(queries.ADD_NOTE, {
    refetchQueries: [queries.GET_NOTES, "notes"]
  });

  
  
  return (
    <div className="max-w-md mx-auto border ">
      <h2 className="text-center bg-slate-100 text-slate-800 font-bold py-2 rounded border">
        {" "}
        Add a note
      </h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          addNote({ variables: { ...values } }).then(() => {
            navigate("/notes");
          });
        }}
      >
        {(props) => {
          return (
            <Form className="container flex flex-col">
              <label
                className="px-2 font-bold text-slate-700 pt-2"
                htmlFor="title"
              >
                Title
              </label>
              <Field
                className=" border placeholder:text-slate-600 placeholder:italic text-green-700 p-1 m-1"
                id="title"
                type="text"
                name="title"
                placeholder="type a title"
              />
              <label
                className="px-2 font-bold text-slate-700 pt-2"
                htmlFor="description"
              >
                Description
              </label>
              <Field
                className="border placeholder:text-slate-600 placeholder:italic text-green-700 p-1 m-1"
                id="description"
                as="textarea"
                name="description"
                rows="8"
                placeholder="give a meaningful description"
              />
              <label
                className="px-2 font-bold text-slate-700 pt-2"
                htmlFor="url"
              >
                Url
              </label>
              <Field
                className="border placeholder:text-slate-600 placeholder:italic text-green-700 p-1 m-1"
                id="url"
                type="text"
                name="url"
                placeholder="optional"
              />
              <div className="text-center ">
                <button
                  className=" focus:text-black mt-4 rounded-md bg-orange-800 text-white p-2 w-48"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export { AddNoteForm };
