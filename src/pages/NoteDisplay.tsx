import * as React from "react";
import { useParams } from "react-router-dom";

const NoteDisplay = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>{id}</h2>
    </div>
  );
};
export { NoteDisplay };
