import React from "react";
import MovieThumbnail from "../MovieThumbnail/MovieThumbnail";

const MovieList = props => {
   const movieList = props.movieResults.map((movie, index) => <MovieThumbnail {...movie} key={movie.imdbID + index} />);

   return (
      <ul>
         {movieList}
      </ul>
   )
}

export default MovieList;