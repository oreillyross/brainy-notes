import type { TNote } from "types/note";
import { Link } from "react-router-dom";

interface Props {
  notes: TNote[];
}

function NotesListView(props: Props) {
  const notes = props.notes;

  return (
    <section className="border-t-2 mt-16 p-4 pl-16 text-1xl">
      <table className="text-1xl w-full table-auto">
        <thead className="text-2xl text-amber-900">
          <tr>
            <th>No.</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, index) => (
            <tr className="hover:font-medium hover:bg-stone-100 border">
              <td className="p-2">{index + 1}</td>
              <td className="tracking-wider pl-10 ">
                <Link to={`/note/${note.id}`}>{note.title}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default NotesListView;
