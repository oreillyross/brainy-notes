import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

interface Props {
  filter: string;
}
const AllNotesList = ({ filter }: Props) => {
  return <div>Sorted notes</div>;
};
export default AllNotesList;
