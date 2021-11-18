import React from "react";
import { ContactCard } from "../../molecules";

export const ContactList = ({ contacts }) => (
  <div>
    {contacts?.map((contact) => (
      <ContactCard contact={contact} key={contact.login.uuid} />
    ))}
  </div>
);
