import React, { useState } from "react";
import { ContactList } from "../ContactList";
import styles from "./AddressBook.module.css";

export const AddressBook = ({ contacts }) => {
  const [search, setSearch] = useState("");
  const filteredContacts =
    search.length === 0
      ? contacts
      : contacts.filter(
          ({ name }) =>
            name.last.toLowerCase().includes(search.toLowerCase()) ||
            name.first.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div className={styles.addressBook}>
      <input
        className={styles.searchBar}
        value={search}
        placeholder={"type to search by first or last name"}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};
