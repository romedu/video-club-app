import React, {Component} from "react";
import {connect} from "react-redux";
import {getAndSetRentedMovie, deleteRentedMovie} from "../../../store/actions/rentedMovie";
import {clearRentedMovie} from "../../../store/actions/rentedMovie";
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
      this.props.onClearRentedMovie();
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
   currentMovie: state.rentedMovies.current
});

const mapDispatchToProps = dispatch => ({
   onSetRentedMovie: movieId => dispatch(getAndSetRentedMovie(movieId)),
   onClearRentedMovie: () => dispatch(clearRentedMovie),
   onRentedMovieDelete: (movieId, imdbID) => dispatch(deleteRentedMovie(movieId, imdbID))
});

export default connect(mapStateToProps, mapDispatchToProps)(RentedMovie);