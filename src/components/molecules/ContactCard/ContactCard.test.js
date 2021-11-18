import React from "react";
import { render, screen } from "@testing-library/react";
import { ContactCard } from "./ContactCard";
import Router from "react-router-dom";
import { MemoryRouter } from "react-router-dom";

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
            picture: { thumbnail: "test" },
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
