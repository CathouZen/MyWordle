import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

// supposed to have 30 cells, good luck
test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});
