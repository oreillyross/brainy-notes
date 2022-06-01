import { getByRole, render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { AddNoteForm } from "../../forms/add-note-form";
import { BrowserRouter as Router } from "react-router-dom";

test("submitting calls onSubmit with correct values", () => {
  const { container, getAllByRole, getByRole, debug } = render(
    <Router>
      <MockedProvider addTypename={false}>
        <AddNoteForm />
      </MockedProvider>
    </Router>
  );
 
});
