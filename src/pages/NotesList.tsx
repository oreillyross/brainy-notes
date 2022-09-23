import { getFilteredNotes } from "api/notes";
import { supabase } from "api/supabase";
import { useQuery } from "@tanstack/react-query";

interface Props {
  filter: string
}
const getNotes = async (filter: string) => {
  const {data} = await supabase.from("notes").select("*").ilike("title", `%${filter}%`)
  return data
}
const NotesList = ({filter}:Props) => {
  
  // const filteredNotes = useQuery("filtered-notes", getFilteredNotes(filter))
  const {isLoading, isError, data, error} = useQuery(["notes", filter], () => getNotes(filter))
  if (isError && error instanceof Error) {
    return <div>{error.message}</div>
    
  }
  if (data) {
    return <div>{data.map(note => <div key={note.id}>{note.id}{note.title}</div>)}</div>
  }
  return (
    <ul className="p-4 border m-4">
    This is where the list of notes goes
    {filter ?? <div>{filter}</div>}
    </ul>
    
  )
};

export default NotesList;
