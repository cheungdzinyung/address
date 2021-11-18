import React from "react";
import { Link } from "react-router-dom";
import styles from "./ContactCard.module.css";

export const ContactCard = ({ contact }) => (
  <div className={styles.contactCard}>
    <Link to={`contact/${contact.login.uuid}`} state={contact}>
      <img src={contact.picture.medium} alt="avatar" />
      {contact.name.title}. {contact.name.first} {contact.name.last}
    </Link>
  </div>
);
