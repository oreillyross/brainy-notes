import { Formik, Field, Form } from "formik";
import { gql, useMutation } from "@apollo/client";

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

const ADD_NOTE = gql`
  mutation addNote($title: String, $description: String, $url: String) {
    insert_note(
      objects: { description: $description, title: $title, url: $url }
    ) {
      returning {
        id
        title
        description
        url
      }
    }
  }
`;

// move to its own file later
function AddNoteForm() {
  const [addNote, { data, loading, error }] = useMutation(ADD_NOTE);

  return (
    <div>
      <h2> Add a note</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) =>  {
          addNote({variables: {title: "hello", description: "Roo", url: "jfdjkfjkjk"}})
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
