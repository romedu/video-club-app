import React from "react";
import {NavLink} from "react-router-dom";
import style from "./NavItem.module.css";

const NavItem = ({url, children}) => (
   <NavLink to={url} className={style.navItem}>
      {children}
   </NavLink>
);

export default NavItem;