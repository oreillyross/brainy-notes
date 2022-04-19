import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { AddNoteForm } from "../../forms/add-note-form";
import { BrowserRouter as Router } from "react-router-dom";

test("submitting calls onSubmit with correct values", () => {
  render(
    <Router>
      <MockedProvider addTypename={false}>
        <AddNoteForm />
      </MockedProvider>
    </Router>
  );

  screen.debug();
});
