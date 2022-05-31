import * as React from "react";

type NoteBoxProps = {
  note: {
    status: string;
    id: string;
    title: string;
    url: string;
  };
};

const NoteBox = (props: NoteBoxProps) => {
  const [status, setStatus] = React.useState(props.note.status);
  const [hyperlink, setHyperlink] = React.useState("");
  const [isTitle, setIsTitle] = React.useState(false);

  const addNewNote = () => {
    setStatus("edit");
  };

  const addTitle = () => {
    setIsTitle(true);
  };

  if (status === "placeholder") {
    return <div onClick={addNewNote}>Click to add a note</div>;
  }
  if (status === "view") {
    return <div>View</div>;
  }
  if (status === "edit") {
    return (
      <div>
        <input
          value={hyperlink}
          onChange={(e) => setHyperlink(e.target.value)}
          name="hyperlink"
          type="text"
          placeholder="paste your hyperlink here..."
        />
        <button onClick={addTitle}>add link</button>
      </div>
    );
    if (isTitle) {
      <div>
        <input
          value={hyperlink}
          onChange={(e) => setHyperlink(e.target.value)}
          name="hyperlink"
          type="text"
          placeholder="paste your hyperlink here..."
        />
        <button onClick={addTitle}>add link</button>
      </div>;
    }
  }
  return <div>Roo</div>;
};

export { NoteBox };
