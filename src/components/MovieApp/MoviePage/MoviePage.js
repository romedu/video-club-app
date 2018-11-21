import React, {Component} from "react";
import {connect} from "react-redux";
import {getMovies} from "../../../store/actions/movie";
import {createMovie, setMovie} from "../../../store/actions/movie";
import {findByImdbID} from "../../../helpers";
import Button from "../../UI/Button/Button";

class Movie extends Component {
   componentDidMount(){
      this.props.onMoviesGet();
   }

   componentDidUpdate(){
      const {movies, match, onMovieCreate, onMovieSet} = this.props,
            currentMovie = findByImdbID(match.params.id, movies);

      if(!currentMovie) onMovieCreate(match.params.id);
      else onMovieSet(currentMovie._id);
   }

   render(){
      const {title, image, availableForRent, released, directedBy, actors, plot, distributedBy} = this.props.movies.current;

      return (
         <section>
            <h2>
               {title}
            </h2>
            <img src={image} alt="" />
            <h4>
               We have {availableForRent} copies available
            </h4>
            <ul>
               <li>
                  <h5>
                     Released:
                  </h5>
                  {released}
               </li>
               <li>
                  <h5>
                     Directed By:
                  </h5>
                  {directedBy}
               </li>
               <li>
                  <h5>
                     Main actors:
                  </h5>
                  {actors}
               </li>
            </ul>
            <p>
               <h5>
                  Plot:
               </h5>
               <div>
                  {plot}
               </div>
            </p>
            <div>
               Distributed by: {distributedBy}
            </div>
            <Button color="sale">
               Rent Movie
            </Button>
         </section>
      )
   }
}

const mapStateToProps = state => ({
   movies: state.movies
});

const mapDispatchToProps = dispatch => ({
   onMoviesGet: () => dispatch(getMovies()),
   onMovieCreate: imdbId => dispatch(createMovie(imdbId)),
   onMovieSet: movieId => dispatch(setMovie(movieId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Movie);