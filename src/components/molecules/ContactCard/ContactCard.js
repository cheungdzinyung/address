import React from "react";
import { Link } from "react-router-dom";

export const ContactCard = ({ contact }) => (
  <div>
    <Link to={`contact/${contact.login.uuid}`} state={contact}>
      <img src={contact.picture.thumbnail} alt="avatar" />
      {contact.name.title}. {contact.name.first} {contact.name.last}
    </Link>
  </div>
);
