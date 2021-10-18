import { Formik, Field, Form } from "formik";
import { useMutation } from "@apollo/client";
import * as queries from "queries/index";
import { useHistory } from "react-router-dom";
import "./add-note-form.scss"

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

// move to its own file later
function AddNoteForm() {
  const history = useHistory();

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
            history.push("/notes");
          });
        }}
      >
        {(props) => {
          return (
            <Form className="addnoteform">
              <label htmlFor="title">Title</label>
              <Field type="text" name="title" />
              <label htmlFor="description">Description</label>
              <Field as="textarea" name="description" />
              <label htmlFor="url">Url</label>
              <Field type="text" name="url" />
              <button className="addnoteform__button" type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export { AddNoteForm };
