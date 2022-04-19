import { Formik, Field, Form } from "formik";
import { useMutation } from "@apollo/client";
import * as queries from "queries/index";
import { useNavigate } from "react-router-dom";
import "./add-note-form.scss";

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
              <Field id="title" type="text" name="title" />
              <label htmlFor="description">Description</label>
              <Field id="description" as="textarea" name="description" />
              <label htmlFor="url">Url</label>
              <Field id="url" type="text" name="url" />
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
