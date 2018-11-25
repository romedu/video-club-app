import React from "react";
import Logo from "../../UI/Logo/Logo";
import NavItems from "../NavItems/NavItems";
import Hamburger from "../Hamburger/Hamburger";
import styles from "./Toolbar.module.css";

const Toolbar = props => (
   <header className={styles.Toolbar}>
      <Hamburger toggleHandler={props.toggleHandler}/>
      <Logo />
      <nav className={styles.DesktopOnly}>
         <NavItems />
      </nav>
   </header>
);

export default Toolbar;