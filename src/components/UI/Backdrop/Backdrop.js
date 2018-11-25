import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = props => props.show && (
                              <div className={`${styles.Backdrop} ${styles.sideDrawer && styles.SideDrawerDrop}`} 
                              onClick={props.hide}></div>
                           );

export default Backdrop;
