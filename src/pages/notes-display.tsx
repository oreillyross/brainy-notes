import { useQuery } from "@apollo/client";
import * as queries from "../queries/index";
import { Notes } from "pages/notes";
import { Loading } from "components/loading-indicator";

const NotesDisplay = () => {
  const { data, loading, error } = useQuery(queries.GET_NOTES);
  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  if (error) {
    return <> error {error.message}</>;
  }

  if (data) {
    return <div>{data && <Notes notes={data.note} />}</div>;
  }
  return null;
};

export { NotesDisplay };
