import React from "react";
import { render, screen } from "@testing-library/react";
import Register from "../Register";;

test("Are the form input renderd", () => {
  render(<Register/>);

  const inputName = screen.getByPlaceholderText("Username");
  expect(inputName).toBeInTheDocument();

  const button = screen.getByText(/enter/i)
  expect(button).toBeInTheDocument();
});