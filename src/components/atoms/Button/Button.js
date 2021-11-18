import React from "react";
import styles from "./Button.module.css";

export const Button = (props) => (
  <div className={styles.button} onClick={props.onClick}>
    <p>{props.title.toUpperCase()}</p>
  </div>
);
