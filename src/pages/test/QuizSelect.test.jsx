import React from "react";
import { render, screen } from "@testing-library/react";

import QuizSelect from "../QuizSelect";

test("Render QuizSelect", () => {
    render(<QuizSelect/>);

    const title = screen.getByText(/Choose a topic!/i);
    expect(title).toBeInTheDocument();
});