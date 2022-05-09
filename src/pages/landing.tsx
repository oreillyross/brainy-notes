import { AddNoteButton } from "components/add-note-button";

const LandingPage = () => {
  return (
    <>
      <div className="">
        <img
          className="px-10 object-contain col-span-3"
          alt="people taking notes"
          src="/people.svg"
        />
        <div className="px-10 py-3">
          Welcome to the world's best note taking app. Lets get going by adding
          some notes...
        </div>
        <div className="text-center">
          <AddNoteButton />
        </div>
      </div>
    </>
  );
};

export { LandingPage };
