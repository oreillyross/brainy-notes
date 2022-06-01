import { AddNoteButton } from "features/notes/add-note-button";

const LandingPage = () => {
  return (
    <>
      <div className="">
        <img
          className="max-w-2xl m-auto px-10 object-contain col-span-3"
          alt="people taking notes"
          src="/people.svg"
        />
        <div className="pl-24 pt-12 text-2xl">
          Welcome to the world' s best note taking app. Lets get going by adding
          some notes...
        </div>
        <div className="text-center pt-4">
          <AddNoteButton />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
