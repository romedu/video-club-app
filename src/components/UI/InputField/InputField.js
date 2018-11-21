import React from "react";

const inputField = props => (
    <fieldset>
        <label>
            {props.children}
        </label>
        <input type={props.type} name={props.name} value={props.value} checked={props.checked} onChange={props.updateInput} 
               placeholder={props.placeholder || props.children} autoComplete="off"/>
    </fieldset>
);

export default inputField;