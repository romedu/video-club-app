import React from "react";
import styles from "./Button.module.css";

const Button = props => (
   <button className={styles[props.color]}>
      {props.children}
   </button>
);

export default Button;