import React from "react";
import styles from "./InputField.module.css";

const inputField = props => (
    <fieldset className={styles.InputField}>
        <label>
            {props.children}
        </label>
        <input type={props.type} name={props.name} value={props.value} checked={props.checked} onChange={props.updateInput} 
               placeholder={props.placeholder || props.children} autoComplete="off" 
               required={props.type !== "checkbox" && props.type !== "radio"}/>
    </fieldset>
);

export default inputField;