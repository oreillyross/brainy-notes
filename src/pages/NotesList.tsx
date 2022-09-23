import { getFilteredNotes } from "api/notes";
import { useQuery } from "react-query";

interface Props {
  filter: string
}

const NotesList = ({filter}:Props) => {
  
  // const filteredNotes = useQuery("filtered-notes", getFilteredNotes(filter))

  return (
    <ul className="p-4 border m-4">
    This is where the list of notes goes
    {filter ?? <div>{filter}</div>}
    </ul>
  )
};

export default NotesList;
