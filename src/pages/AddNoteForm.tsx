import { Formik, Field, Form, ErrorMessage } from "formik";
import { uuid } from "uuidv4";

const initialValues: FormValues = {
  id: "",
  title: "",
  description: "",
  url: ""
};

type FormValues = {
  id: string;
  title: string;
  description?: string;
  url?: string;
};

const submitNote = (values: FormValues) => {
  //setItem to localstorage
  // later this goes to firebase...
  let notes = localStorage.getItem("notes");
  if (notes === null) {
    notes = "[]";
  }
  if (notes) {
    const notesObj = JSON.parse(notes);
    const newNote = { ...values, id: uuid() };
    localStorage.setItem("notes", JSON.stringify([...notesObj, newNote]));
  }
};

// move to its own file later
function AddNoteForm() {
  return (
    <div>
      <h2> Add a note</h2>
      <Formik initialValues={initialValues} onSubmit={submitNote}>
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
