import { Formik, Field, Form } from "formik";
import { useMutation } from "@apollo/client";
import * as queries from "queries/index";
import { useHistory } from "react-router-dom";

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
            <Form>
              <label htmlFor="title">Title</label>
              <Field type="text" name="title" />
              <label htmlFor="description">Description</label>
              <Field type="text" name="description" />
              <label htmlFor="url">Url</label>
              <Field type="text" name="url" />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export { AddNoteForm };
