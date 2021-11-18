import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  it("should render a header with text 'Address Book'", () => {
    render(<Header />);
    const linkElement = screen.getByText(/Address Book/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("should render the logo image with alt tag 'Address Book Logo'", () => {
    render(<Header />);
    const logo = screen.getByRole("img");
    expect(logo.src).toContain("address-book-thumbnail.png");
    expect(logo).toHaveAttribute("alt", "Address Book Logo");
  });
});
