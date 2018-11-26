import React from "react";
import MovieThumbnail from "../MovieThumbnail/MovieThumbnail";
import appStyles from "../../../App.module.css";

const MovieList = props => {
   const movieList = props.movieResults.map((movie, index) => <MovieThumbnail {...movie} key={movie.imdbID + index} />);

   return (
      <ul className={appStyles.ThumbnailList}>
         {movieList}
      </ul>
   )
}

export default MovieList;