import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ContactCard } from "./ContactCard";

describe("ContactCard", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render with user info", async () => {
    const component = render(
      <MemoryRouter>
        <ContactCard
          user={{
            login: { uuid: 1 },
            picture: { medium: "test" },
            name: { title: "Mr", first: "Andrew", last: "Cheung" },
          }}
        />
      </MemoryRouter>
    );

    const cellElement = screen.getByText(/Mr. Andrew Cheung/i);
    expect(cellElement).toBeInTheDocument();

    expect(component).toMatchSnapshot();
  });
});
