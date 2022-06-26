import { screen, render } from "@testing-library/react";
import Note from "./Note";
import { notes } from "api/mocks/staticNotes";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Note/>", () => {
  it("Renders a generic note", () => {
    const { debug, getByRole } = render(
      <Router>
        <Note  />
      </Router>
    );

    expect(screen.getByRole("heading")).toBeDefined();
  });
});
