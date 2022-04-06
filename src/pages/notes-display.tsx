import { NetworkStatus, useQuery } from "@apollo/client";
import * as queries from "../queries/index";
import { Notes } from "pages/notes";
import { Loading } from "components/loading-indicator";
import { BounceLoader } from "components/bounce-loader";
import SearchBar from "components/SearchBar";



const NotesDisplay = () => {

  

  const { data, loading, error, refetch, networkStatus } = useQuery(queries.GET_NOTES, {
    variables: { title: "%%" },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) {
    return (
      <>
        <BounceLoader />
      </>
    );
  }
  
  if (error) {
    return <> error {error.message}</>;
  }

  const handleSearch = (s: string) => {
    console.log(s);
    refetch({ title: `%${s}%` })
   
  };

  if (data) {
    
    return (
      <>
        <SearchBar onSearch={handleSearch} />
        <div>{data && <Notes notes={data?.note} />}</div>;
      </>
    );
  }
  return null;
};

export { NotesDisplay };
