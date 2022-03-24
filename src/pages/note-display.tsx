import * as React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import * as queries from "queries/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from '@fortawesome/free-solid-svg-icons'

const NoteDisplay = () => {
  const { id } = useParams();
  const { data } = useQuery(queries.GET_NOTE, { variables: { _id: id } });
  if (data)
    return (
      <div>
        <h2 className="text-center p-2 text-gray-900 text-2xl">{data.note[0].title}</h2>
        <p className="p-2 font-thin">{data.note[0].description}</p>
        
        <a target="_blank" rel="noreferrer noopener" href={data.note[0].url}>
        <p className="text-right p-1"><FontAwesomeIcon icon={faLink} /></p>
        </a>
      </div>
    );

  return <div></div>;
};
export { NoteDisplay };
