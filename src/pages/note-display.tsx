import * as React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import * as queries from "queries/index";

interface IDString {
  id: string;
}
const NoteDisplay = () => {
  const { id } = useParams<IDString>();
  const { data } = useQuery(queries.GET_NOTE, { variables: { _id: id } });
  if (data)
    return (
      <div>
        <h2>{data.note[0].title}</h2>
        <div>{data.note[0].description}</div>
        <a target="_blank" rel="noreferrer noopener" href={data.note[0].url}>
          link
        </a>
      </div>
    );

  return (
    <div>
    </div>
  );
};
export { NoteDisplay };
