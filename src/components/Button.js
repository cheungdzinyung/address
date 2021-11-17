import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <div className={styles.button} onClick={props.onClick}>
      <p>{props.title}</p>
    </div>
  );
};

export default Button;
