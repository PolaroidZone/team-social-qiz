//Testing the quiz applications lifecycle
import React from "react";
import { render, screen } from "@testing-library/react";

import App from "../App";
import userEvent from "@testing-library/user-event";
import { userInfo } from "os";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

test("Registration and quiz taking", async () => {
  render(<App />);

  const user = userEvent;

  const registerButton = screen.getByText(/team social!/i);
  expect(registerButton).toBeInTheDocument();

  const nameInput = screen.getByPlaceholderText("Username");
  await user.type(nameInput, "Test User");

  const submitButton = screen.getByRole("button");
  await user.click(submitButton);

  //check if the username can be retrived from local storage
  const username = screen.queryByText(/Test User/i);
  expect(username).toBeInTheDocument();
});
