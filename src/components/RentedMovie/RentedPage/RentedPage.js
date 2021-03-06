import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {simplifyDate, itsDue, sumDaysToDate} from "../../../helpers";
import Button from "../../UI/Button/Button";
import styles from "../RentedMovie/RentedMovie.module.css";

const RentedPage = ({movie, returnMovie, userIsAdmin}) => (
   <Fragment>
      <h2>
         {movie.title}
      </h2>
      <img src={movie.image} />
      <h4>
         Date Rented: {simplifyDate(movie.rentedAt)}
      </h4>
      <h4 className={itsDue(sumDaysToDate(movie.rentedAt, movie.rentedDays)) ? styles.DueDate : null}>
         Due Date: {simplifyDate(movie.rentedAt, movie.rentedDays)}
      </h4>
      <Link to={`/clients/${movie.rentedBy._id}`} style={{display: "block"}}>
         Rented By: {`${movie.rentedBy.name} ${movie.rentedBy.lastName}`}
      </Link>
      <Link to={`/movies/${movie.imdbID}`}>
         Movie Description
      </Link>
      {userIsAdmin && <Button color="submit" action={returnMovie}>
         Return Movie
      </Button>}
   </Fragment>
);

export default RentedPage;