import { createContext, useState } from "react";

export const AddressBookContext = createContext(null);

export const AddressBookProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  return (
    <AddressBookContext.Provider value={{ contacts, setContacts }}>
      {children}
    </AddressBookContext.Provider>
  );
};
