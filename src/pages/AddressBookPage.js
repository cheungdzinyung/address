import React, { useEffect } from "react";
import { AddressBook } from "../components";
import { useFetch, useAddressBook } from "../hooks";
import loading from "../assets/images/loading.gif";
import styles from "./AddressBookPage.module.css";

export const AddressBookPage = () => {
  const { contacts, setContacts } = useAddressBook();

  const { data, isLoading, hasError } = useFetch(
    "https://randomuser.me/api/?results=50&nat=us,ca,gb&inc=name,picture,login,phone,cell&seed=nuvalence",
    // for simplicity, used contacts data to determine whether the data need to be re-fetched or not,
    // should use page number or other parameter to check (when pagination is implemented)
    !contacts || contacts.length === 0
  );

  useEffect(() => {
    if (data?.results) {
      const fetchedContacts = data.results;
      if (Array.isArray(fetchedContacts)) {
        fetchedContacts.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
      }
      setContacts(fetchedContacts);
    }
  }, [data, setContacts]);

  return (
    <div>
      {hasError && <p>Something went wrong</p>}
      {isLoading && (
        <div className={styles.spinner}>
          <img src={loading} alt="loading" />
        </div>
      )}
      {contacts && contacts.length > 0 && <AddressBook contacts={contacts} />}
    </div>
  );
};
