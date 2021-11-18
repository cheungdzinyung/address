import React from "react";
import { render, screen } from "@testing-library/react";
import { ContactList } from "./ContactList";
import Router from "react-router-dom";

const contacts = [
  {
    name: "Andrew 01",
    picture: { large: "test 01" },
    phone: "phone111",
    cell: "cel111",
    login: { uuid: "1" },
  },
  {
    name: "Andrew 02",
    picture: { large: "test 02" },
    phone: "phone222",
    cell: "cel222",
    login: { uuid: "2" },
  },
];

jest.mock("../../molecules/ContactCard", () => ({
  ContactCard: ({ contact }) => <div>{contact.name}</div>,
}));

describe("ContactList", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render with contacts", async () => {
    const component = render(<ContactList contacts={contacts} />);
    const nameElement = screen.queryAllByText(/Andrew/i);
    expect(nameElement.length).toBe(2);

    expect(component).toMatchSnapshot();
  });
});
