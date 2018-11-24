import React from "react";
import styles from "./Button.module.css";

const Button = props => (
   <button className={`${styles[props.color]} ${styles.Button}`} onClick={props.action}>
      {props.children}
   </button>
);

export default Button;