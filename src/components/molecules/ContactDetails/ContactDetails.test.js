import React from "react";
import Router from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { ContactDetails } from "./ContactDetails";

const mockUseLocationValue = {
  pathname: "/contact",
  search: "",
  hash: "",
  state: {
    name: "Andrew",
    picture: { large: "test" },
    phone: "phone123",
    cell: "cell123",
  },
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
}));

describe("ContactDetails", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render contact info", async () => {
    jest.spyOn(Router, "useLocation").mockReturnValue(mockUseLocationValue);
    const component = render(<ContactDetails />);

    const phoneElement = screen.getByText(/phone123/i);
    expect(phoneElement).toBeInTheDocument();

    const cellElement = screen.getByText(/cell123/i);
    expect(cellElement).toBeInTheDocument();

    expect(component).toMatchSnapshot();
  });
});
