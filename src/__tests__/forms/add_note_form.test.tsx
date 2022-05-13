import { getByRole, render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { AddNoteForm } from "../../forms/add-note-form";
import { BrowserRouter as Router } from "react-router-dom";

test("submitting calls onSubmit with correct values", () => {
  const {getAllByRole, getByRole, debug} = render(
    <Router>
      <MockedProvider addTypename={false}>
        <AddNoteForm />
      </MockedProvider>
    </Router>
  );
  const inputs = getAllByRole("textbox");
  const submit = getByRole("button", {name: "Submit"});
  inputs[0].textContent = "Some new Note Title";
  inputs[1].textContent = "Some new Note Description";
  inputs[2].textContent = "Some new Note URL";
  
  // debug();
});
