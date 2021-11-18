import { useContext } from "react";
import { AddressBookContext } from "../../contexts";

export const useAddressBook = () => useContext(AddressBookContext);
