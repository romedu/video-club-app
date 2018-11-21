import React from "react";
import {connect} from "react-redux";
import MovieThumbnail from "../MovieThumbnail/MovieThumbnail";

const MovieList = props => {
   const movieList = props.movieResults.map(movie => <MovieThumbnail {...movie} key={movie.imdbID} />);

   return (
      <ul>
         {movieList}
      </ul>
   )
}

const mapStateToProps = state => ({
   movieResults: state.movieSearch.list
});

export default connect(mapStateToProps)(MovieList);