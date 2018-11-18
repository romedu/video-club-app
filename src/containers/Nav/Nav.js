import React from "react";
import Logo from "../../components/Logo/Logo";
import NavItems from "../../components/Navigation/NavItems/NavItems";
import styles from "./Nav.module.css";

const Nav = props => {
   return (
      <nav className={styles.navBar}>
         <Logo />
         <NavItems />
      </nav>
   )
};

export default Nav;