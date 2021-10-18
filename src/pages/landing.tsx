import { AddNoteButton } from "components/add-note-button";
const LandingPage = () => {
  return (
    <>
      <div>
        Welcome to the world's best note taking app. Lets get started by adding
        your first note.
        <AddNoteButton />
      </div>
      <img className="body__img" alt="people taking notes" src="./people.svg" />
    </>
  );
};

export { LandingPage };
