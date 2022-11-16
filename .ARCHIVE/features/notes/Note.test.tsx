import React from 'react'
import { screen, render } from "@testing-library/react";

import { BrowserRouter as Router } from "react-router-dom";

describe("<Note/>", () => {
  it("Renders a generic note", () => {
    const { debug, getByRole } = render(
      <Router>
        <>
        </>
      </Router>
    );

    expect(screen.getByRole("heading")).toBeDefined();
  });
});
