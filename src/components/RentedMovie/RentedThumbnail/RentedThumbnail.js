import React from "react";
import {Link} from "react-router-dom";
import styles from "./RentedThumbnail.module.css";
import appStyles from "../../../App.module.css";
import {simplifyDate, itsDue, sumDaysToDate} from "../../../helpers";

const RentedThumbnail = props => (
   <Link to={`/rented-movies/${props._id}`}>
      <li className={appStyles.MovieThumbnail}>
         <img src={props.image} />
         <h4>
            {props.title}
         </h4>
         <div className={styles.RentedAt}>
            Date Rented: {simplifyDate(props.rentedAt)}
         </div>
         <div className={itsDue(sumDaysToDate(props.rentedAt, props.rentedDays)) ? styles.DueDate : null}>
            Due Date: {simplifyDate(props.rentedAt, props.rentedDays)}
         </div>   
      </li>
   </Link>
);

export default RentedThumbnail;