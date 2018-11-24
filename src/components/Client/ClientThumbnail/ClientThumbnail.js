import React from "react";
import {Link} from "react-router-dom";
import style from "./ClientThumbnail.module.css";

const ClientThumbnail = props => (
   <Link to={`/clients/${props._id}`}>
      <li className={style.ClientThumbnail}>
         <h5> {props.name} {props.lastName} </h5>
         <div> Movies rented: {props.rentedMovies.length} </div>
         <div> Debt: {props.debt}€ </div>
      </li>
   </Link>
);

export default ClientThumbnail;