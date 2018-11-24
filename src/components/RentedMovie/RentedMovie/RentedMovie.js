import React, {Component} from "react";
import {connect} from "react-redux";
import {getAndSetRentedMovie, deleteRentedMovie} from "../../../store/actions/rentedMovie";
import {clearMovie} from "../../../store/actions/movie";
import RentedPage from "../RentedPage/RentedPage";

class RentedMovie extends Component {
   state = {
      isLoading: true
   }

   componentDidMount(){
      const {match, onSetRentedMovie} = this.props;
      onSetRentedMovie(match.params.id);
   }

   componentDidUpdate(prevProps){
      const {currentMovie, history} = this.props;
      if(prevProps.currentMovie && !currentMovie) history.goBack();
   }

   componentWillUnmount(){
      this.props.onClearMovie();
   }

   render(){
      const {currentMovie, onRentedMovieDelete} = this.props;
      return (
         <section>
            {currentMovie && <RentedPage movie={currentMovie} returnMovie={() => onRentedMovieDelete(currentMovie._id, currentMovie.imdbID)} />}
         </section>
      )
   }
}

const mapStateToProps = state => ({
   currentMovie: state.movies.current
});

const mapDispatchToProps = dispatch => ({
   onSetRentedMovie: movieId => dispatch(getAndSetRentedMovie(movieId)),
   onClearMovie: () => dispatch(clearMovie),
   onRentedMovieDelete: (movieId, imdbID) => dispatch(deleteRentedMovie(movieId, imdbID))
});

export default connect(mapStateToProps, mapDispatchToProps)(RentedMovie);