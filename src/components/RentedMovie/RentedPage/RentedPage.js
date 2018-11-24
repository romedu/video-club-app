import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {simplifyDate} from "../../../helpers";
import Button from "../../UI/Button/Button";

const RentedPage = ({movie}) => (
   <Fragment>
      <h2>
         {movie.title}
      </h2>
      <img src={movie.image} alt="" />
      <h4>
         Date Rented: {simplifyDate(movie.rentedAt)}
      </h4>
      <h4>
         Due Date: {simplifyDate(movie.rentedAt, movie.rentedDays)}
      </h4>
      <Link to={`/clients/${movie.rentedBy._id}`} style={{display: "block"}}>
         Rented By: {`${movie.rentedBy.name} ${movie.rentedBy.lastName}`}
      </Link>
      <Link to={`/movies/${movie.imdbID}`}>
         Movie Description
      </Link>
      <Button>
         Return Movie
      </Button>
   </Fragment>
);

export default RentedPage;