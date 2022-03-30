import { useQuery } from "@apollo/client";
import * as queries from "../queries/index";
import { Notes } from "pages/notes";
import { Loading } from "components/loading-indicator";
import { BounceLoader } from "components/bounce-loader";
<<<<<<< HEAD


const NotesDisplay = () => {
 

  const { data, loading, error } = useQuery(queries.GET_NOTES);
 
=======
// import * as demoData from "demo/search_results.json";

const NotesDisplay = () => {
  // const { note } = demoData.data;

  const { data, loading, error } = useQuery(queries.GET_NOTES);
  // if (process.env.NODE_ENV === "development") {
  //   return (
  //     <div>
  //       Notes
  //       {note.map((n) => (
  //         <li>{n.title}</li>
  //       ))}
  //     </div>
  //   );
  // }
>>>>>>> 55f27e07263e54fd285eb6d46132f0236e692588
  if (loading) {
    return (
      <>
        <BounceLoader />
      </>
    );
  }
  if (error) {
    return <> error {error.message}</>;

    // }
  }

  if (data) {
    return <div>{data && <Notes notes={data.note} />}</div>;
  }
  return null;
};

export { NotesDisplay };
