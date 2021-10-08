import * as React from "react";
import "./LandingPage.scss";

function LandingPage() {
  return (
    <>
      {" "}
      <div className="landingPage__slogan">
        The easiest way to capture interesting learning notes and then retrieve
        them
      </div>
      <img
        className="landingPage__img"
        alt="people taking notes"
        src="./people.svg"
      />
      <button>Get Started</button>
    </>
  );
}

export { LandingPage };
