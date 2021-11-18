import React from "react";
import { ContactCard } from "../../molecules";
import styles from "./ContactList.module.css";

export const ContactList = ({ contacts }) => (
  <div className={styles.contactList}>
    {contacts?.map((contact) => (
      <ContactCard contact={contact} key={contact.login.uuid} />
    ))}
  </div>
);
