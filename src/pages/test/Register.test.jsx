import React from "react";
import { render, screen } from "@testing-library/react";
import Register from "../Register";
import userEvent from "@testing-library/user-event";

test("Are the form input renderd", () => {
  render(<Register/>);

  const inputName = screen.getByPlaceholderText("Username");
  const inputEmail = screen.getByPlaceholderText("Email");
  const inputPassword = screen.getByPlaceholderText("Password");

  expect(inputName).toBeInTheDocument();
  expect(inputEmail).toBeInTheDocument();
  expect(inputPassword).toBeInTheDocument();
});

test("Create a new user", async () => {
  const user = userEvent;

  render(<Register/>);

  const inputName = screen.getByPlaceholderText("Username");
  await user.type(inputName, "test");

  const inputEmail = screen.getByPlaceholderText("Email");
  await user.type(inputEmail, "test@mail");

  const inputPassword = screen.getByPlaceholderText("Password");
  await user.type(inputPassword, "test");

  const button = screen.getByRole("button");
  await user.click(button);
});
