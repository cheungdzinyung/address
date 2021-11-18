import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import { AddressBook } from "./AddressBook";
import Router from "react-router-dom";

const contacts = [
  {
    name: { first: "Andrew", last: "01" },
    picture: { large: "test 01" },
    phone: "phone111",
    cell: "cel111",
    login: { uuid: "1" },
  },
  {
    name: { first: "Andrew", last: "02" },
    picture: { large: "test 02" },
    phone: "phone222",
    cell: "cel222",
    login: { uuid: "2" },
  },
  {
    name: { first: "Test", last: "01" },
    picture: { large: "test 02" },
    phone: "phone222",
    cell: "cel222",
    login: { uuid: "3" },
  },
];

jest.mock("../ContactList", () => ({
  ContactList: ({ contacts }) => (
    <div>
      {contacts.map(({ login, name }) => (
        <div key={login.uuid}>{name.first}</div>
      ))}
    </div>
  ),
}));

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

const useStateMock = useState;

describe("AddressBook", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render with 3 contacts", async () => {
    const mockSetState = jest.fn(() => "");

    useStateMock.mockImplementation((initialState) => [
      initialState,
      mockSetState,
    ]);

    const component = render(<AddressBook contacts={contacts} />);
    const inputElements = screen.getAllByRole("textbox");
    expect(inputElements.length).toBe(1);

    const contactElements = screen.queryAllByText(/Andrew/i);
    expect(contactElements.length).toBe(2);

    expect(component).toMatchSnapshot();
  });

  it("should render with 1 contact", async () => {
    //did not mock user input through input box, simply mocked state change
    const mockSetState = jest.fn();

    useStateMock.mockImplementation((initialState) => ["Test", mockSetState]);

    const component = render(<AddressBook contacts={contacts} />);
    const inputElements = screen.getAllByRole("textbox");
    expect(inputElements.length).toBe(1);

    const contactTextElements = screen.queryAllByText(/Test/i);
    expect(contactTextElements.length).toBe(1);

    const contactAndrewElements = screen.queryAllByText(/Andrew/i);
    expect(contactAndrewElements.length).toBe(0);

    expect(component).toMatchSnapshot();
  });
});
