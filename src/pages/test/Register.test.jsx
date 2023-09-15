import React from "react";
import { render, screen } from "@testing-library/react";
import Register from "../Register";
import userEvent from "@testing-library/user-event";

test("Are the form input renderd", () => {
  render(<Register/>);

  const inputName = screen.getByPlaceholderText("Username");
  expect(inputName).toBeInTheDocument();

  const button = screen.getByText(/enter/i)
  expect(button).toBeInTheDocument();
});

// test("Create a new user", async () => {
//   const user = userEvent;

//   render(<Register/>);

//   const inputName = screen.getByPlaceholderText("Username");
//   await user.type(inputName, "test");

//   const button = screen.getByRole("button");
//   await user.click(button);
// });
