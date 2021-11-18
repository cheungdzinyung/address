import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  it("should render a button with Test Button", () => {
    render(<Button title="Test Button" />);
    const linkElement = screen.getByText(/Test Button/i);
    expect(linkElement).toBeInTheDocument();
  });
});
