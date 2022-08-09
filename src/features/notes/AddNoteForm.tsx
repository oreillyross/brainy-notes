import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
// import * as Yup from "yup";
import { useQueryClient, useMutation } from "react-query";
import { supabase } from "client";

const initialValues: FormValues = {
  title: "",
  description: "",
  url: "",
};

// const NoteSchema = Yup.object().shape({
//   title: Yup.string().required("At least a title is required"),
//   description: Yup.string().min(
//     10,
//     "Think about providing a longer description"
//   ),
//   url: Yup.string().url("This doesn't seem to be a valid url")
// });

type FormValues = {
  title: string;
  description?: string;
  url?: string;
};

async function addNote(values: FormValues) {
  return await supabase.from("notes").insert(values);
}

function AddNoteForm() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation(addNote, {
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
    },
  });

  return (
    <div className="max-w-md mx-auto border ">
      <h2 className="text-center bg-slate-100 text-slate-800 font-bold py-2 rounded border">
        {" "}
        Add a note
      </h2>
      <Formik
        initialValues={initialValues}
        // validationSchema={NoteSchema}
        onSubmit={(values, { resetForm }) => {
          const canSubmit = Object.values(values).some((v) => Boolean(v));

          const { title, description, url } = values;
          if (canSubmit) {
            mutation.mutate(values);
            resetForm();
          }

          navigate("/notes");
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
                autoFocus
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

export default AddNoteForm;
