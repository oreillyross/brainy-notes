import { iterateObserversSafely } from "@apollo/client/utilities";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { AddNoteForm } from "pages/add-note-form";

test("submitting calls onSubmit with correct values", () => {
  render(
    <MockedProvider addTypename={false} >
      <AddNoteForm />
    </MockedProvider>
  );
  const handleSubmit = jest.fn();
  
  screen.debug();
});
