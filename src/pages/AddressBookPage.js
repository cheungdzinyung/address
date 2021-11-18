import React, { useState, useEffect } from "react";
import { AddressBook } from "../components";
import { useFetch } from "../hooks/UseFetch";
import loading from "../assets/images/loading.gif";

export const AddressBookPage = () => {
  const url =
    "https://randomuser.me/api/?results=50&nat=us,ca,gb&inc=name,picture,login,phone,cell&seed=nuvalence";
  const { data, isLoading, hasError } = useFetch(url);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if (data?.results) {
      const fetchedContacts = data.results;
      if (Array.isArray(fetchedContacts)) {
        fetchedContacts.sort((a, b) => (a.name.last > b.name.last ? 1 : -1)); // sort asc by last name
      }
      setContacts(fetchedContacts);
    }
  }, [data]);

  return (
    <div>
      {hasError && <p>Something went wrong</p>}
      {isLoading && (
        <div id="spinner">
          <img src={loading} alt="loading" />
        </div>
      )}
      {contacts.length > 0 && <AddressBook contacts={contacts} />}
    </div>
  );
};
