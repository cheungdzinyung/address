import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./ContactDetails.module.css";

export const ContactDetails = () => {
  const location = useLocation();
  const contact = location.state;

  return (
    <div className={styles.contactDetails}>
      {contact && (
        <>
          <img
            src={contact.picture.large}
            alt={`${contact.name.first} ${contact.name.last}`}
          />
          <h2>
            {contact.name.title}. {contact.name.first} {contact.name.last}
          </h2>
          <h3>Phone: {contact.phone} </h3>
          <h3>Cell: {contact.cell}</h3>
        </>
      )}
    </div>
  );
};
