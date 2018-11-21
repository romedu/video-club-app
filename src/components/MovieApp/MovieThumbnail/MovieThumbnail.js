import React from "react";
import {Link} from "react-router-dom";

const MovieThumbnail = props => (
   <Link to={`/movies/${props.imdbID}`}>
      <li>
         <h4>
            {props.Title}
         </h4>
         <img src={props.Poster} alt="" />
         <div>
            Year: {props.Year}
         </div>
      </li>
   </Link>
);

export default MovieThumbnail;