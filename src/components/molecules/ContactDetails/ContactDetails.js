import React from "react";
import { useLocation } from "react-router-dom";

export const ContactDetails = () => {
  const location = useLocation();
  const contact = location.state;

  return (
    <div>
      {contact && (
        <>
          <img src={contact.picture.large} alt="profile" />
          <h1>
            {contact.name.title}. {contact.name.first} {contact.name.last}
          </h1>
          <h2>Phone: {contact.phone} </h2>
          <h2>Cell: {contact.cell}</h2>
        </>
      )}
    </div>
  );
};
