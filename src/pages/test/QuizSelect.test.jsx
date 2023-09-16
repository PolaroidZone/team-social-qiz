import React from "react";
import { render, screen } from "@testing-library/react";

import QuizSelect from "../QuizSelect";

test("Render QuizSelect", () => {
  render(<QuizSelect />);

  const title = screen.getByText(/Choose a topic!/i);
  expect(title).toBeInTheDocument();
});

test("Renders Quiz topics", () => {
  render(<QuizSelect />);

  const movies = screen.queryByText(/movies/i);
  expect(movies).toBeInTheDocument();

  const programming = screen.queryByText(/programming/i);
  expect(programming).toBeInTheDocument();

  const history = screen.queryByText(/history/i);
  expect(history).toBeInTheDocument();
});
