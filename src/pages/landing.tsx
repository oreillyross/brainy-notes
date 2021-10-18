import { AddNoteButton } from "components/add-note-button";
import "./landing.scss"
const LandingPage = () => {
  return (
    <>
      <div className="landing">
        <div className="landing__strap">Welcome to the world's best note taking app. Lets get going by adding
        some notes...
        </div>
        <div className="landing__button"><AddNoteButton /></div>
      </div>
      <img className="body__img" alt="people taking notes" src="./people.svg" />
    </>
  );
};

export { LandingPage };
