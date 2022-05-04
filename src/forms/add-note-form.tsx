import { Formik, Field, Form } from "formik";
import { useMutation } from "@apollo/client";
import * as queries from "queries/index";
import { useNavigate } from "react-router-dom";

const initialValues: FormValues = {
  title: "",
  description: "",
  url: "",
};

type FormValues = {
  title: string;
  description?: string;
  url?: string;
};

function AddNoteForm() {
  const navigate = useNavigate();

  const [addNote] = useMutation(queries.ADD_NOTE, {
    refetchQueries: [queries.GET_NOTES, "notes"],
  });

  return (
    <div>
      <h2> Add a note</h2>
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
            <Form className="addnoteform">
              <label htmlFor="title">Title</label>
              <Field
                className="placeholder:text-slate-600 placeholder:italic text-green-700 p-1 m-1"
                id="title"
                type="text"
                name="title"
                placeholder="type a title"
              />
              <label htmlFor="description">Description</label>
              <Field
                className="placeholder:text-slate-600 placeholder:italic text-green-700 p-1 m-1"
                id="description"
                as="textarea"
                name="description"
                placeholder="give a meaningful description"
              />
              <label htmlFor="url">Url</label>
              <Field
                className="placeholder:text-slate-600 placeholder:italic text-green-700 p-1 m-1"
                id="url"
                type="text"
                name="url"
                placeholder="optional"
              />
              <div className="text-center ">
                <button
                  className=" rounded-md bg-orange-800 text-white p-2 w-48"
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
