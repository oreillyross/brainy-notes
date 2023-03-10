import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

interface Props {
  filter: string;
}
const NotesList = ({ filter }: Props) => {
  return <div className="grid">List of notes</div>;
};

export default NotesList;
