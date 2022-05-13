import { InlineEdit } from "../components/InlineEdit";
import { useState } from "react";
import { Formik } from "formik";


function EditNoteForm() {
  //TODO need the api endpoint call to set a value on Heroku/Hasura
  const [value, setValue] = useState("");

  const initialValues = {
    title: "",
    description: "",
    url: "",
  };

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <form className="noteForm">
          <label className="noteForm__label" htmlFor="title">
            Title
          </label>
            <input className="noteForm__input" placeholder="type a title..." name="title" id="title" type="text" />
          <label className="noteForm__label" htmlFor="description">
            Description
          </label>
            <textarea className="noteForm__input" placeholder="type a description..." name="description" id="description" rows={2} />
          <label className="noteForm__label" htmlFor="url">
            Url
          </label>
            <input className="noteForm__input" name="url" id="url" type="url" />
          <button type="submit" className="noteForm__button">Submit</button>
        </form>
      )}
    </Formik>
  );
}

export { EditNoteForm };
