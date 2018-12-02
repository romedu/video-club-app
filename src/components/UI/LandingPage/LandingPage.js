import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import Button from "../Button/Button";
import styles from "./LandingPage.module.css";

const LandingPage = props => (
   <section className={styles.Landing}>
      <div>
         <div className={styles.Door}>
               <h1> Video Club App </h1>
               <Link to="/movies">
                  <Button color="landing">
                     Rent some movies
                  </Button>
               </Link>
         </div>
      </div>
      <ul>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
         <li></li>
      </ul>
   </section>
);

export default LandingPage;