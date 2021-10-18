import { useQuery } from "@apollo/client";
import * as queries from "../queries/index";
import { Notes } from "pages/notes";

const NotesDisplay = () => {
  const { data } = useQuery(queries.GET_NOTES);

  if (data) {
    return <div>{data && <Notes notes={data.note} />}</div>;
  }
  return null;
};

export { NotesDisplay };
