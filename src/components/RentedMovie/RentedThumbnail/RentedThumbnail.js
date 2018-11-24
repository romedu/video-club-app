import React from "react";
import {Link} from "react-router-dom";
import styles from "./RentedThumbnail.module.css";
import {simplifyDate} from "../../../helpers";

const RentedThumbnail = props => (
   <Link to={`/rented-movies/${props._id}`}>
      <li className={styles.MovieThumbnail}>
         <h4>
            {props.title}
         </h4>
         <img src={props.image} alt="" />
         <div>
            Date Rented: {simplifyDate(props.rentedAt)}
         </div>
         <div>
            Due Date: {simplifyDate(props.rentedAt, props.rentedDays)}
         </div>   
      </li>
   </Link>
);

export default RentedThumbnail;