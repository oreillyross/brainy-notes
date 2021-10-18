import "./SearchResults.scss";
import * as React from "react";
import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

type NoteType = {
  id: string;
  title: string;
  description: string;
  url: string;
};

const NOTES = gql`
  query notes {
    note {
      title
      description
      url
    }
  }
`;

function SearchResults() {
  const { data, error } = useQuery(NOTES);

  return (
    <section>
      <input
        name="search"
        id="search"
        type="text"
        placeholder="search your notes..."
      />
      <button>Search</button>
      <div>
        {error && <div>`There was an error getting notes: ${error}` </div>}
        {data && (
          <ul>
            {data.note.map((note: any) => (
              <li key={note.id}>
                <Link to={`/note/${note.id}`}>{note.title}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export { SearchResults };
