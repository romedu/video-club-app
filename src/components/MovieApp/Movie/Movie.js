import React, {Component} from "react";
import {connect} from "react-redux";
import {getMovies} from "../../../store/actions/movie";
import {createMovie, setMovie, clearMovie} from "../../../store/actions/movie";
import {findByImdbID} from "../../../helpers";
import MoviePage from "../MoviePage/MoviePage";

class Movie extends Component {
   componentDidMount(){
      this.props.onMoviesGet();
   }

   componentDidUpdate(){
      const {movies, match, onMovieCreate, onMovieSet} = this.props;
      if(!movies.current){
         const currentMovie = movies.list.length ? findByImdbID(match.params.id, movies.list) : null;
         if(!currentMovie) onMovieCreate(match.params.id);
         else onMovieSet(currentMovie._id);
      }
   }

   componentWillUnmount(){
      this.props.onMovieClear();
   }

   render(){
      const {current: currentMovie} = this.props.movies;

      return (
         <section>
            {currentMovie && <MoviePage {...currentMovie} />}
         </section>
      )
   }
}

const mapStateToProps = state => ({
   movies: state.movies
});

const mapDispatchToProps = dispatch => ({
   onMoviesGet: () => dispatch(getMovies()),
   onMovieCreate: imdbID => dispatch(createMovie(imdbID)),
   onMovieSet: movieId => dispatch(setMovie(movieId)),
   onMovieClear: () => dispatch(clearMovie)
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);