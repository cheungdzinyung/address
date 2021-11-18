import React, { useEffect } from "react";
import { AddressBook } from "../components";
import { useFetch, useAddressBook } from "../hooks";
import loading from "../assets/images/loading.gif";

export const AddressBookPage = () => {
  const { contacts, setContacts } = useAddressBook();

  const { data, isLoading, hasError } = useFetch(
    "https://randomuser.me/api/?results=50&nat=us,ca,gb&inc=name,picture,login,phone,cell&seed=nuvalence",
    // for simplicity, use contacts data to determine whether the data need to be refetched or not, 
    // should use page no or other parameter to check.
    // if have more pages, should use page number to determine if refetch is needed
    !contacts || contacts.length === 0 
  );

  useEffect(() => {
    if (data?.results) {
      const fetchedContacts = data.results;
      if (Array.isArray(fetchedContacts)) {
        fetchedContacts.sort((a, b) => (a.name.last > b.name.last ? 1 : -1)); // sort asc by last name
      }
      setContacts(fetchedContacts);
    }
  }, [data, setContacts]);

  return (
    <div>
      {hasError && <p>Something went wrong</p>}
      {isLoading && (
        <div id="spinner">
          <img src={loading} alt="loading" />
        </div>
      )}
      {contacts && contacts.length > 0 && <AddressBook contacts={contacts} />}
    </div>
  );
};
