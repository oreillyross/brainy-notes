import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "app/hooks";
import { useQuery } from "react-query";
import { supabase } from "supabase";
import NoteCard from "./NoteCard";
import { TNote } from "types/note";

const fetchNote = async (id: string) => {
  const { data } =
    await supabase.from<TNote>("notes").select("*").eq("id", id);
  return data;
};

const Note = () => {
  const { id = "" } = useParams();
  const { isLoading, isError, data, error } = useQuery(["notes", id], () =>
    fetchNote(id)
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    return (
      <>
        <div>Oops</div>;
      </>
    );
  }
  if (data) {
    return <div>{data && <NoteCard note={data[0]} />}</div>;
  }
};

export default Note;
