import { InlineEdit } from "../components/InlineEdit";
import { useState } from "react";

function EditNoteForm() {
  //TODO need the api endpoint call to set a value on Heroku/Hasura
  const [value, setValue] = useState("");

  return <InlineEdit value={value} setValue={setValue} />;
}

export { EditNoteForm };
