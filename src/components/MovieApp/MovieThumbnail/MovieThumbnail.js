import React from "react";
import {Link} from "react-router-dom";
import Button from "../../UI/Button/Button";
import appStyles from "../../../App.module.css";

const MovieThumbnail = props => (
   <li className={`${appStyles.MovieThumbnail}`}>
      <Link to={`/movies/${props.imdbID}`}>
         <img src={props.Poster} />
      </Link>
      <h4>
         {props.Title}
      </h4>
      <div>
         Year: {props.Year}
      </div>
      <Link to={`/movies/${props.imdbID}`}>
         <Button>
            Check Movie
         </Button>
      </Link>
   </li>
);

export default MovieThumbnail;